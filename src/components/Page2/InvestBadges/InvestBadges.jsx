import React from "react"
import "./InvestBadges.scss"

export default function InvestBadges() {
  const badges = [
    {
      title: "Накапливайте, принося пользу обществу",
      icon: (
        <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="24" rx="14" ry="6" fill="#DDEAFE" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M6 24v4c0 3.3 6.3 6 14 6s14-2.7 14-6v-4" stroke="#1B59F8" strokeWidth="1.5"/>
          <ellipse cx="20" cy="18" rx="14" ry="6" fill="#EFF6FF" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M6 18v4c0 3.3 6.3 6 14 6s14-2.7 14-6v-4" stroke="#1B59F8" strokeWidth="1.5"/>
          <ellipse cx="20" cy="12" rx="14" ry="6" fill="#FFFFFF" stroke="#1B59F8" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: "Зарабатывайте честно и справедливо",
      icon: (
        <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="10" width="32" height="22" rx="6" fill="#DDEAFE" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M4 16h32" stroke="#1B59F8" strokeWidth="1.5"/>
          <rect x="22" y="20" width="10" height="6" rx="2" fill="#FFFFFF" stroke="#1B59F8" strokeWidth="1.5"/>
          <circle cx="25" cy="23" r="1.5" fill="#1B59F8"/>
        </svg>
      )
    },
    {
      title: "Вкладывайте в реальные проверенные сделки",
      icon: (
        <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="24" width="7" height="10" rx="1.5" fill="#DDEAFE" stroke="#1B59F8" strokeWidth="1.5"/>
          <rect x="16" y="17" width="7" height="17" rx="1.5" fill="#EFF6FF" stroke="#1B59F8" strokeWidth="1.5"/>
          <rect x="26" y="10" width="7" height="24" rx="1.5" fill="#FFFFFF" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M4 34h32" stroke="#1B59F8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Обеспечьте вложения надежными активами",
      icon: (
        <svg width="44" height="44" viewBox="0 0 40 40" fill="none">
          <path d="M20 6L32 11V21C32 28 26.5 33.5 20 35C13.5 33.5 8 28 8 21V11L20 6Z" fill="#DDEAFE" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M20 6v29" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M20 18L30 14" stroke="#1B59F8" strokeWidth="1.5"/>
        </svg>
      )
    }
  ]

  return (
    <section className="invest-badges-section">
      <div className="container">
        <div className="invest-badges-grid">
          {badges.map((b, i) => (
            <div key={i} className="invest-badge-item">
              <div className="invest-badge-icon">{b.icon}</div>
              <p className="invest-badge-text">{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
