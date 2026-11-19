import express from 'express'
import cors from 'cors'
import Database from 'better-sqlite3'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Open (or create) the database
const db = new Database(join(__dirname, 'nurfinance.db'))

// ─── Schema ───────────────────────────────────────────────────────────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS investments (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT NOT NULL,
    category      TEXT NOT NULL DEFAULT 'Инвестиции',
    rate          REAL NOT NULL,
    term_months   INTEGER NOT NULL,
    min_amount    INTEGER NOT NULL DEFAULT 50000,
    payout_type   TEXT NOT NULL DEFAULT 'monthly',
    description   TEXT,
    badge_text    TEXT,
    is_active     INTEGER NOT NULL DEFAULT 1,
    created_at    TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS installment_products (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT NOT NULL,
    category      TEXT NOT NULL DEFAULT 'Рассрочка',
    max_amount    INTEGER NOT NULL,
    term_months   INTEGER NOT NULL,
    down_payment  INTEGER NOT NULL DEFAULT 10,
    description   TEXT,
    badge_text    TEXT,
    is_active     INTEGER NOT NULL DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS news (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    title         TEXT NOT NULL,
    excerpt       TEXT,
    published_at  TEXT DEFAULT (datetime('now')),
    is_active     INTEGER NOT NULL DEFAULT 1
  );
`)

// ─── Seed investments (run only if table is empty) ────────────────────────────
const investCount = db.prepare('SELECT COUNT(*) as c FROM investments').get()
if (investCount.c === 0) {
  const insert = db.prepare(`
    INSERT INTO investments (name, category, rate, term_months, min_amount, payout_type, description, badge_text)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const seed = [
    ['Вклад «Комфорт»',      'Инвестиции', 17.5, 12, 50000,   'end',     'Доход выплачивается по окончании срока договора. Стабильно. Прозрачно.', 'Популярный'],
    ['Вклад «Активный»',     'Инвестиции', 16.5,  6, 50000,   'end',     'Высокая капитализация процентов, возможность пополнения.',               null],
    ['Вклад «Накопительный»','Инвестиции', 14.5, 24, 50000,   'monthly', 'Регулярное пополнение и досрочное снятие без потери процентов.',          'Гибкий'],
    ['Вклад «Премиум»',      'Инвестиции', 19.0, 36, 500000,  'end',     'Максимальная доходность для крупных инвестиций от 500 000 ₽.',            'Новый'],
    ['Вклад «Классик»',      'Инвестиции', 13.0,  3, 10000,   'end',     'Минимальный порог входа — от 10 000 ₽. Идеально для начинающих.',         null],
    ['Вклад «Халяль»',       'Инвестиции', 15.5, 12, 100000,  'monthly', 'Соответствует нормам Шариата. Строгий аудит каждой сделки.',              'Халяль'],
  ]
  seed.forEach(row => insert.run(...row))
  console.log('✅ Инвестиционные продукты созданы')
}

// Seed installment_products
const installCount = db.prepare('SELECT COUNT(*) as c FROM installment_products').get()
if (installCount.c === 0) {
  const ins = db.prepare(`
    INSERT INTO installment_products (name, category, max_amount, term_months, down_payment, description, badge_text)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)
  ins.run('Авто Рассрочка',    'Авто',    5000000, 60, 10, 'Рассрочка на новые авто и авто с пробегом без навязанного КАСКО.', 'Популярный')
  ins.run('Экспресс Рассрочка','Товары',  1000000, 36,  0, 'Быстрое одобрение. Без первоначального взноса.',                   null)
  ins.run('Ипотечная Рассрочка','Недвижимость', 15000000, 240, 20, 'Доступное жильё на условиях Шариата.', 'Халяль')
}

// Seed news
const newsCount = db.prepare('SELECT COUNT(*) as c FROM news').get()
if (newsCount.c === 0) {
  const ins = db.prepare(`INSERT INTO news (title, excerpt) VALUES (?, ?)`)
  ins.run('НурФинанс повысил ставки по вкладам до 19%', 'С 1 января 2025 года вступают в силу новые условия инвестиционных продуктов.')
  ins.run('Расширение офисной сети в Поволжье', 'К концу года компания откроет 5 новых офисов в городах Татарстана.')
  ins.run('Халяль-финансы: итоги аудита 2024', 'Независимый шариатский совет подтвердил соответствие всех продуктов.')
}

// ─── Routes ───────────────────────────────────────────────────────────────────
app.get('/api/investments', (req, res) => {
  const rows = db.prepare('SELECT * FROM investments WHERE is_active = 1 ORDER BY rate DESC').all()
  res.json(rows)
})

app.get('/api/investments/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM investments WHERE id = ?').get(req.params.id)
  if (!row) return res.status(404).json({ error: 'Not found' })
  res.json(row)
})

app.get('/api/installment', (req, res) => {
  const rows = db.prepare('SELECT * FROM installment_products WHERE is_active = 1').all()
  res.json(rows)
})

app.get('/api/news', (req, res) => {
  const rows = db.prepare('SELECT * FROM news WHERE is_active = 1 ORDER BY published_at DESC').all()
  res.json(rows)
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok', db: 'nurfinance.db' }))

app.listen(PORT, () => {
  console.log(`🚀 НурФинанс API  →  http://localhost:${PORT}`)
})
