import React from "react"
import { Link } from "react-router-dom"
import "./Section5.scss"

export default function Section5() {
  const benefits = [
    {
      title: "Накапливайте, принося пользу окружающим (обществу)",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
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
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 6L32 11V21C32 28 26.5 33.5 20 35C13.5 33.5 8 28 8 21V11L20 6Z" fill="#DDEAFE" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M20 6v29" stroke="#1B59F8" strokeWidth="1.5"/>
          <path d="M20 18L30 14" stroke="#1B59F8" strokeWidth="1.5"/>
        </svg>
      )
    }
  ]

  return (
    <section className="opportunities-section">
      <div className="container">
        <h2 className="section-title">Ваши возможности с НурФинанс</h2>

        <div className="opportunities-grid">
          {/* Column 1: Benefits List + Button */}
          <div className="opp-col-left">
            <div className="benefits-list">
              {benefits.map((item, index) => (
                <div key={index} className="benefit-row">
                  <div className="benefit-icon-wrap">{item.icon}</div>
                  <span className="benefit-text">{item.title}</span>
                </div>
              ))}
            </div>

            <Link to="/investments" className="btn btn-primary btn-opp-cta">
              Инвестиционные продукты
            </Link>
          </div>

          {/* Column 2 & 3: Comparison Visuals */}
          <div className="opp-col-right">
            {/* Top row: Bar comparison (left) & Stability chart (right) */}
            <div className="charts-top-row">
              {/* Bar comparison */}
              <div className="bar-chart-block">
                <h4 className="chart-header">Получайте повышенный доход от вложений</h4>

                <div className="bars-wrap">
                  {/* Bar 1 */}
                  <div className="bar-item">
                    <div className="bar-top">
                      <span className="b-val">до 8%</span>
                      <span className="b-sub">Годовых</span>
                    </div>
                    <div className="bar-pill bar-gray" style={{ height: "36px" }}></div>
                    <span className="bar-caption">Банковские вклады</span>
                  </div>

                  {/* Bar 2 (NurFinance - Featured Tall) */}
                  <div className="bar-item is-featured">
                    <div className="bar-top">
                      <span className="b-val val-blue">до 19%</span>
                      <span className="b-sub sub-blue">Годовых</span>
                    </div>
                    <div className="bar-pill bar-blue" style={{ height: "105px" }}></div>
                    <span className="bar-caption cap-blue">Вклады НурФинанс</span>
                  </div>

                  {/* Bar 3 */}
                  <div className="bar-item">
                    <div className="bar-top">
                      <span className="b-val">до 9%</span>
                      <span className="b-sub">Годовых</span>
                    </div>
                    <div className="bar-pill bar-gray" style={{ height: "42px" }}></div>
                    <span className="bar-caption">Вложения в недвижимость</span>
                  </div>
                </div>
              </div>

              {/* Line chart: Stability */}
              <div className="stability-chart-block">
                <h4 className="chart-header">Инвестируйте со стабильным результатом</h4>

                <div className="stability-chart-svg-wrap">
                  <svg viewBox="0 0 340 140" className="stability-svg">
                    {/* Stock Market: Sharp volatile jagged line */}
                    <polyline
                      points="10,120 40,95 65,115 85,75 105,110 130,120 160,80 185,110 215,60 245,105 270,75 295,95 320,65 335,95"
                      fill="none"
                      stroke="#94A3B8"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    {/* NurFinance: Smooth, steady upward curve */}
                    <path
                      d="M 10 120 C 80 115, 170 102, 335 70"
                      fill="none"
                      stroke="#002EF5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* 8 Hollow circular markers along blue curve */}
                    <circle cx="10" cy="120" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="55" cy="116" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="105" cy="111" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="155" cy="104" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="205" cy="96" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="255" cy="87" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="300" cy="78" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                    <circle cx="335" cy="70" r="4" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                  </svg>

                  {/* Legend */}
                  <div className="chart-legend">
                    <div className="legend-entry">
                      <span className="dot dot-gray"></span>
                      <span>Фондовый рынок</span>
                    </div>
                    <div className="legend-entry">
                      <span className="dot dot-blue"></span>
                      <span className="legend-bold">Вклады НурФинанс</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: Liquidity comparison */}
            <div className="liquidity-section-wrap">
              <h5 className="liquidity-main-title">Возвращайте свои средства вовремя</h5>

              <div className="liquidity-cards-row">
                {/* Item 1: Real estate */}
                <div className="liquidity-box">
                  <div className="l-top">
                    <span className="l-title">Недвижимость</span>
                    <span className="l-badge badge-gray">низкая ликвидность</span>
                  </div>
                  <div className="l-term-row">
                    <svg className="check-svg gray-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                    <span>Срок возврата от 3 месяцев</span>
                  </div>
                  <div className="l-track">
                    <div className="l-fill fill-gray" style={{ width: "28%" }}></div>
                  </div>
                </div>

                {/* Item 2: NurFinance */}
                <div className="liquidity-box is-featured">
                  <div className="l-top">
                    <span className="l-title">НурФинанс</span>
                    <span className="l-badge badge-blue">высокая ликвидность</span>
                  </div>
                  <div className="l-term-row term-blue">
                    <svg className="check-svg blue-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#002EF5" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                    <span>Срок возврата от 3 дней</span>
                  </div>
                  <div className="l-track">
                    <div className="l-fill fill-blue" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
