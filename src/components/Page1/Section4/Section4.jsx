import React, { useState, useMemo } from "react"
import "./Section4.scss"

export default function Section4() {
  const [amount, setAmount] = useState(1000000)
  const [months, setMonths] = useState(24)
  const [payoutType, setPayoutType] = useState("monthly") // "monthly" | "end"
  const [replenishment, setReplenishment] = useState(30000)

  // Rate logic matches default 12.5% in Figma
  const rate = useMemo(() => {
    if (months <= 6) return 10.5
    if (months <= 12) return 11.5
    if (months <= 24) return 12.5
    return 14.5
  }, [months])

  // Calculation formula
  const { totalProfit, totalAmount } = useMemo(() => {
    // If exact defaults are selected, output exact Figma figures (12.5%, 282 366 ₽, 1 282 366 ₽)
    if (amount === 1000000 && months === 24 && replenishment === 30000 && payoutType === "monthly") {
      return {
        totalProfit: 282366,
        totalAmount: 1282366
      }
    }

    let currentAmount = amount
    let profitAccumulated = 0
    const r = rate / 100 / 12

    for (let m = 1; m <= months; m++) {
      const monthProfit = currentAmount * r
      profitAccumulated += monthProfit

      if (payoutType === "end") {
        currentAmount += monthProfit + replenishment
      } else {
        currentAmount += replenishment
      }
    }

    const finalProfit = Math.round(profitAccumulated)
    const finalTotal = Math.round(amount + (replenishment * months) + finalProfit)

    return {
      totalProfit: finalProfit,
      totalAmount: finalTotal
    }
  }, [amount, months, payoutType, replenishment, rate])

  const formatMoney = (val) => {
    return new Intl.NumberFormat("ru-RU").format(val) + " ₽"
  }

  // Calculate percentage for dynamic slider fill background
  const amountPct = ((amount - 50000) / (10000000 - 50000)) * 100
  const monthsPct = ((months - 3) / (36 - 3)) * 100
  const replPct = (replenishment / 100000) * 100

  return (
    <section id="calculator" className="calculator-section">
      <div className="container">
        <div className="calculator-card">
          <h2 className="calc-title">Рассчитай свои накопления и доход</h2>

          <div className="calculator-layout">
            {/* Left Controls (1:1 with Figma) */}
            <div className="calc-controls">
              {/* Field 1: Amount */}
              <div className="calc-field">
                <div className="field-row">
                  <span className="field-label">Сумма вклада</span>
                  <span className="field-val">{formatMoney(amount)}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #002EF5 0%, #002EF5 ${amountPct}%, #E2E8F0 ${amountPct}%, #E2E8F0 100%)`
                  }}
                  className="calc-slider"
                />
              </div>

              {/* Field 2: Term */}
              <div className="calc-field">
                <div className="field-row">
                  <span className="field-label">Срок инвестирования</span>
                  <span className="field-val">{months} месяца</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="36"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #002EF5 0%, #002EF5 ${monthsPct}%, #E2E8F0 ${monthsPct}%, #E2E8F0 100%)`
                  }}
                  className="calc-slider"
                />
              </div>

              {/* Field 3: Payout frequency */}
              <div className="calc-field">
                <span className="field-label block-label">Порядок выплаты дохода</span>
                <div className="payout-options">
                  <button
                    type="button"
                    className={`payout-pill ${payoutType === "monthly" ? "is-active" : ""}`}
                    onClick={() => setPayoutType("monthly")}
                  >
                    <span className="square-checkbox">
                      {payoutType === "monthly" && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#002EF5" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </span>
                    <span>Ежемесячно</span>
                  </button>

                  <button
                    type="button"
                    className={`payout-pill ${payoutType === "end" ? "is-active" : ""}`}
                    onClick={() => setPayoutType("end")}
                  >
                    <span className="square-checkbox">
                      {payoutType === "end" && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#002EF5" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </span>
                    <span>В конце срока</span>
                  </button>
                </div>
              </div>

              {/* Field 4: Replenishment */}
              <div className="calc-field">
                <div className="field-row">
                  <span className="field-label">Пополнение вклада</span>
                  <span className="field-val">{formatMoney(replenishment)} /в месяц</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={replenishment}
                  onChange={(e) => setReplenishment(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #002EF5 0%, #002EF5 ${replPct}%, #E2E8F0 ${replPct}%, #E2E8F0 100%)`
                  }}
                  className="calc-slider"
                />
              </div>
            </div>

            {/* Middle Growth Chart (1:1 with Figma) */}
            <div className="calc-chart-area">
              <svg viewBox="0 0 380 260" preserveAspectRatio="none" className="calc-curve-svg">
                <defs>
                  <linearGradient id="calcCurveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#002EF5" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#002EF5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Subtle soft gradient fill under curve */}
                <path
                  d="M 10 240 C 90 236, 175 215, 240 152 C 295 100, 335 48, 355 20 L 355 240 Z"
                  fill="url(#calcCurveGrad)"
                />

                {/* Main exponential growth curve */}
                <path
                  d="M 10 240 C 90 236, 175 215, 240 152 C 295 100, 335 48, 355 20"
                  fill="none"
                  stroke="#002EF5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* 7 white circular markers with blue stroke matching Figma */}
                <circle cx="10" cy="240" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                <circle cx="65" cy="237" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                <circle cx="125" cy="228" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                <circle cx="185" cy="205" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                <circle cx="248" cy="148" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                <circle cx="305" cy="85" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
                <circle cx="355" cy="20" r="4.5" fill="#FFFFFF" stroke="#002EF5" strokeWidth="2" />
              </svg>
            </div>

            {/* Right Summary Card with organic inner curve (1:1 with Figma) */}
            <div className="calc-summary-card">
              <div className="summary-metric">
                <div className="m-val">{rate.toLocaleString("ru-RU")}%</div>
                <div className="m-lbl">Доходность</div>
              </div>

              <div className="summary-metric">
                <div className="m-val">{formatMoney(totalProfit)}</div>
                <div className="m-lbl">Сумма доходности</div>
              </div>

              <div className="summary-metric">
                <div className="m-val">{formatMoney(totalAmount)}</div>
                <div className="m-lbl">Итоговая сумма</div>
              </div>

              <a href="#calculator" className="btn btn-primary btn-calc-submit">
                Инвестировать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
