import React from "react"
import { Link } from "react-router-dom"
import "./Section7.scss"

export default function Section7() {
  const cards = [
    {
      category: "Ответы",
      title: "Часто задаваемые вопросы",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      links: [
        "Что такое инвестиции? Зачем нужно инвестировать?",
        "Какие стратегии инвестирования существуют и какую лучше выбрать?",
        "Как защищены мои инвестиции? Что будет, если компания обанкротится?"
      ]
    },
    {
      category: "Халяль",
      title: "Отличие исламских инвестиций от неисламских",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 3v18"></path>
          <path d="M6 8l6-3 6 3"></path>
          <path d="M6 13h12"></path>
        </svg>
      ),
      links: [
        "Термин «Риба» - что такое ростовщические операции?",
        "Как проверяют компании на соответствие нормам халяль.?",
        "Термин «Сукук» - эквивалент исламских облигаций"
      ]
    },
    {
      category: "Полезное",
      title: "Школа инвестора",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      links: [
        "7 финансовых советов на 2021 год. Что делать, чтобы накопить на цель?",
        "Какие книги надо прочитать инвестору-новичку: топ-5 книг",
        "Сколько нужно денег, чтобы начать инвестировать"
      ]
    }
  ]

  return (
    <section className="info-knowledge-section">
      <div className="container">
        <h2 className="section-title">Полезная информация</h2>

        <div className="knowledge-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="knowledge-card">
              <div className="card-top">
                <span className="card-category">{card.category}</span>
                <div className="card-icon">{card.icon}</div>
              </div>

              <h3 className="card-title">{card.title}</h3>

              <div className="card-links-list">
                {card.links.map((linkText, linkIdx) => (
                  <Link key={linkIdx} to="/articles" className="knowledge-link-item">
                    <span className="link-arrow">›</span>
                    <span className="link-text">{linkText}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
