import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Photo } from "../../Images.js"
import "./Footer.scss"

export default function Footer() {
  const [footerSearch, setFooterSearch] = useState("")

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top footer row: logo & search */}
        <div className="footer-top-row">
          <Link to="/" className="footer-logo">
            <img src={Photo.LogoFooter} alt="НУРФИНАНС" />
          </Link>

          <div className="footer-search-wrap">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Поиск по услугам" 
              value={footerSearch}
              onChange={(e) => setFooterSearch(e.target.value)}
            />
          </div>
        </div>

        {/* 5 Columns Grid */}
        <div className="footer-main-grid">
          {/* Company contacts */}
          <div className="footer-col-company">
            <a href="tel:88002700700" className="footer-phone">
              8 800 2700 700
            </a>
            <a href="mailto:support@nur.finance" className="footer-email">
              support@nur.finance
            </a>

            <div className="footer-address">
              <p>Казань, ул. Мавлютова, дом 31</p>
              <span>Мы работаем с 08:00 до 20:00</span>
            </div>

            <div className="footer-socials">
              <a href="https://vk.com" target="_blank" rel="noreferrer" aria-label="ВКонтакте" className="social-link">
                VK
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-link">
                WA
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram" className="social-link">
                TG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-link">
                YT
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link">
                IG
              </a>
            </div>
          </div>

          {/* Links Column 1: Инвестиции */}
          <div className="footer-col">
            <h4 className="footer-col-title">Инвестиции</h4>
            <ul className="footer-links">
              <li><Link to="/deposit-accumulative">Вклад Накопительный</Link></li>
              <li><Link to="/deposit-active">Вклад Активный</Link></li>
              <li><Link to="/deposit-comfort">Вклад Комфорт</Link></li>
              <li><a href="#calculator">Калькулятор</a></li>
              <li><Link to="/reviews">Отзывы по инвестициям</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Рассрочка */}
          <div className="footer-col">
            <h4 className="footer-col-title">Рассрочка</h4>
            <ul className="footer-links">
              <li><Link to="/auto-installment">АвтоРассрочка</Link></li>
              <li><Link to="/business-finance">Долевое финансирование</Link></li>
              <li><Link to="/business-finance">Долговое финансирование</Link></li>
              <li><a href="#calculator">Калькулятор</a></li>
              <li><Link to="/reviews">Отзывы по займам</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Компания */}
          <div className="footer-col">
            <h4 className="footer-col-title">Компания</h4>
            <ul className="footer-links">
              <li><Link to="/about">О компании</Link></li>
              <li><Link to="/news">Новости</Link></li>
              <li><Link to="/reports">Отчетность</Link></li>
              <li><Link to="/cooperation">Сотрудничество</Link></li>
              <li><Link to="/requisites">Реквизиты</Link></li>
            </ul>
          </div>

          {/* Links Column 4: Информация */}
          <div className="footer-col">
            <h4 className="footer-col-title">Информация</h4>
            <ul className="footer-links">
              <li><Link to="/halal">Халяль подробно</Link></li>
              <li><Link to="/partners">Наши партнеры</Link></li>
              <li><Link to="/faq">Частые вопросы</Link></li>
              <li><Link to="/account">Личный кабинет</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer as in Figma Node 16:115 */}
        <div className="footer-disclaimer">
          <h5 className="disclaimer-title">Заголовок о доп моментах</h5>
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации &quot;Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..&quot; Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам &quot;lorem ipsum&quot; сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-row">
          <span>© 2021 АО «НурФинанс»</span>
          <Link to="/privacy" className="privacy-link">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  )
}
