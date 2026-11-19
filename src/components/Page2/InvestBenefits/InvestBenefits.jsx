import React from "react"
import "./InvestBenefits.scss"

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% обеспеченность активами",
    desc: "Все вклады обеспечены реальными активами компании. Ваши деньги в безопасности."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Доходность до 19% годовых",
    desc: "Значительно выше банковских депозитов при сопоставимом уровне надёжности."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Выплата каждые 3 месяца",
    desc: "Регулярные выплаты дохода: ежемесячно или по окончании срока на ваш выбор."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 3h18M3 21h18M3 12h18M12 3v18" />
      </svg>
    ),
    title: "Соответствие нормам Шариата",
    desc: "Все продукты проходят аудит независимого шариатского совета. Этичные инвестиции."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Индивидуальный подход",
    desc: "Персональный менеджер поможет выбрать оптимальный вклад под ваши цели."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Прозрачная отчётность",
    desc: "Личный кабинет с историей начислений, документами и онлайн-поддержкой."
  }
]

export default function InvestBenefits() {
  return (
    <section className="invest-benefits-section">
      <div className="container">
        <div className="invest-benefits-intro">
          <span className="section-tag">Почему НурФинанс</span>
          <h2 className="section-main-title">Преимущества инвестирования с нами</h2>
          <p className="invest-benefits-subtitle">
            Мы предлагаем прозрачные условия, реальную доходность и 10 лет опыта на финансовом рынке.
          </p>
        </div>

        <div className="invest-benefits-grid">
          {benefits.map((item, i) => (
            <div key={i} className="invest-benefit-card">
              <div className="invest-benefit-icon">{item.icon}</div>
              <h3 className="invest-benefit-title">{item.title}</h3>
              <p className="invest-benefit-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
