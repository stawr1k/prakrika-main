import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Header.scss"
import { Photo } from "../../Images.js"

export default function Header() {
  const location = useLocation()
  const isInvestments = location.pathname.startsWith("/investments") || location.pathname.startsWith("/page2")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="site-header">
      {/* Top Utility Bar - 1:1 with Figma */}
      <div className="top-bar">
        <div className="container top-bar__inner">
          <div className="top-bar__left">
            <span className="company-subtitle">Инвестиционно-финансовая компания</span>
          </div>

          <div className="top-bar__right">
            <nav className="top-nav">
              <span className="geo-link">
                <svg className="icon-geo" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Город: Казань
              </span>
              <Link to="/about">О компании</Link>
              <Link to="/reviews">Отзывы</Link>
              <Link to="/halal">Халяль подробно</Link>
              <Link to="/reports">Отчетность</Link>
              <Link to="/partners">Наши партнеры</Link>
              <Link to="/cooperation">Сотрудничество</Link>
              <Link to="/contacts" className="top-nav__contacts">Контакты</Link>
              <a href="mailto:info@nurfinance.ru" className="mail-link" aria-label="Написать на email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </nav>
            <div className="lang-selector">
              <span>Ru</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav">
        <div className="container main-nav__inner">
          <Link to="/" className="main-nav__logo">
            <img src={Photo.Logo} alt="НУРФИНАНС" />
          </Link>

          <nav className={`main-menu ${mobileMenuOpen ? "is-open" : ""}`}>
            <div className={`menu-item has-dropdown ${isInvestments ? "is-active" : ""}`}>
              <Link to="/investments">
                Инвестиции
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link to="/deposit-comfort">Вклад «Комфорт» (до 17,5%)</Link>
                <Link to="/deposit-active">Вклад «Активный» (до 16,5%)</Link>
                <Link to="/deposit-accumulative">Вклад «Накопительный»</Link>
              </div>
            </div>

            <div className="menu-item has-dropdown">
              <Link to="/installment">
                Рассрочка
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link to="/auto-installment">Авто Рассрочка (до 5 млн)</Link>
                <Link to="/express-installment">Экспресс Рассрочка (до 1 млн)</Link>
                <Link to="/business-finance">Финансирование бизнеса</Link>
              </div>
            </div>

            <div className="menu-item">
              <a href="#calculator">Калькулятор</a>
            </div>
          </nav>

          <div className="main-nav__actions">
            <a href="tel:88002700700" className="nav-phone">
              <svg className="phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              8 800 2700 700
            </a>

            <button 
              className="search-btn" 
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Поиск по сайту"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            <Link to="/account" className="btn btn-primary nav-btn-lk">
              Личный Кабинет
            </Link>

            <a href="#calculator" className="btn btn-outline nav-btn-apply">
              Онлайн-заявка
            </a>

            <button 
              className={`burger-btn ${mobileMenuOpen ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Открыть меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar-dropdown">
            <div className="container">
              <div className="search-bar-input-wrap">
                <input 
                  type="text" 
                  placeholder="Поиск по услугам, статьям и программам..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="btn btn-primary" onClick={() => setSearchOpen(false)}>Найти</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
