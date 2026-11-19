import React from "react"
import "./InvestCTA.scss"

export default function InvestCTA() {
  return (
    <section className="invest-cta-section">
      <div className="container">
        <div className="invest-cta-card">
          <div className="invest-cta-content">
            <span className="cta-tag">Начните сегодня</span>
            <h2 className="cta-title">Готовы к выгодным инвестициям?</h2>
            <p className="cta-desc">
              Оставьте заявку — наш менеджер перезвонит в течение 30 минут, ответит на все вопросы
              и поможет выбрать оптимальный продукт для ваших целей.
            </p>
            <div className="cta-actions">
              <a href="#invest-products" className="btn btn-primary cta-btn-main">
                Выбрать вклад
              </a>
              <a href="tel:+78432000000" className="cta-phone-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42C1.6 2.3 2.42 1.38 3.54 1.38h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9C9.07 11.07 11.05 12.95 13 14l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15l.92 1.92Z" />
                </svg>
                +7 (843) 200-00-00
              </a>
            </div>
          </div>

          <div className="invest-cta-visual">
            <div className="cta-stat-card">
              <span className="cta-stat-value">19%</span>
              <span className="cta-stat-label">максимальная ставка</span>
            </div>
            <div className="cta-stat-card">
              <span className="cta-stat-value">10+</span>
              <span className="cta-stat-label">лет на рынке</span>
            </div>
            <div className="cta-stat-card">
              <span className="cta-stat-value">100%</span>
              <span className="cta-stat-label">обеспечение активами</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
