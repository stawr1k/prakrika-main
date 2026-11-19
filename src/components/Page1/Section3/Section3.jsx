import React from "react"
import "./Section3.scss"

export default function Section3() {
  return (
    <section className="trust-badges-section">
      <div className="container">
        <div className="trust-badges-grid">
          <div className="trust-badge-card">
            <div className="badge-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            </div>
            <span className="badge-text">
              Опыт команды в сфере партнерских финансов более 10 лет.
            </span>
          </div>

          <div className="trust-badge-card">
            <div className="badge-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <span className="badge-text">
              Соответствие деятельности компании высоким этическим и правовым стандартам
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
