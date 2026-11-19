import React, { useState } from "react"
import "./YieldChart.scss"

export default function YieldChart() {
  const [activeIdx, setActiveIdx] = useState(null)

  const data = [
    { month: "Сентябрь", year: "2020", total: 32.53, investor: 16.27 },
    { month: "Октябрь",  year: "2020", total: 38.42, investor: 19.21 },
    { month: "Ноябрь",   year: "2020", total: 28.89, investor: 14.45 },
    { month: "Декабрь",  year: "2020", total: 27.66, investor: 13.83 },
    { month: "Январь",   year: "2021", total: 26.64, investor: 13.32 },
    { month: "Февраль",  year: "2021", total: 27.60, investor: 13.80 },
    { month: "Март",     year: "2021", total: 26.76, investor: 13.38 },
    { month: "Апрель",   year: "2021", total: 29.88, investor: 14.94 },
    { month: "Май",      year: "2021", total: 25.23, investor: 12.62 },
    { month: "Июнь",     year: "2021", total: 25.20, investor: 12.60 },
    { month: "Июль",     year: "2021", total: 25.84, investor: 12.92 },
  ]

  // Chart dimensions in SVG coordinates
  const svgWidth = 1100
  const svgHeight = 280
  const padLeft = 40
  const padRight = 40
  const padTop = 40
  const padBottom = 30

  const chartW = svgWidth - padLeft - padRight
  const chartH = svgHeight - padTop - padBottom

  // Max value ~42, Min value ~10
  const maxVal = 42
  const minVal = 10

  const getX = (i) => padLeft + (i / (data.length - 1)) * chartW
  const getY = (v) => padTop + chartH - ((v - minVal) / (maxVal - minVal)) * chartH

  // Build SVG Path strings
  const totalPath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.total)}`).join(" ")
  const investorPath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.investor)}`).join(" ")

  return (
    <section className="yield-chart-section">
      <div className="container">
        {/* Header with Title and Legend */}
        <div className="yield-header">
          <div className="yield-titles">
            <h2 className="section-title">Доходность</h2>
            <p className="section-subtitle">
              Доходность портфеля компании и инвестиционных вкладов «НурФинанс» в % годовых за последние 11 месяцев
            </p>
          </div>

          <div className="yield-legend">
            <div className="legend-item">
              <span className="dot dot-total"></span>
              <span className="legend-label">Общая доходность</span>
            </div>
            <div className="legend-item">
              <span className="dot dot-investor"></span>
              <span className="legend-label">Средняя доходность инвесторов</span>
            </div>
          </div>
        </div>

        {/* SVG Chart Wrapper */}
        <div className="chart-wrapper">
          <svg 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            className="yield-svg" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Vertical grid lines */}
            {data.map((_, i) => (
              <line
                key={`line-${i}`}
                x1={getX(i)}
                y1={padTop - 10}
                x2={getX(i)}
                y2={svgHeight - 10}
                stroke="#EEF2F6"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            ))}

            {/* Path: Total Yield (Dark Blue) */}
            <path
              d={totalPath}
              fill="none"
              stroke="#0012D8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path: Investor Yield (Light Blue) */}
            <path
              d={investorPath}
              fill="none"
              stroke="#5282F6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Nodes & Text Labels for Total Yield */}
            {data.map((d, i) => {
              const x = getX(i)
              const y = getY(d.total)
              return (
                <g 
                  key={`total-node-${i}`} 
                  className="chart-node"
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <text
                    x={x}
                    y={y - 12}
                    textAnchor="middle"
                    className="node-label total-label"
                  >
                    {d.total.toFixed(2).replace(".", ",")}%
                  </text>
                  <circle cx={x} cy={y} r="5" fill="#0012D8" stroke="#FFFFFF" strokeWidth="2" />
                </g>
              )
            })}

            {/* Nodes & Text Labels for Investor Yield */}
            {data.map((d, i) => {
              const x = getX(i)
              const y = getY(d.investor)
              return (
                <g 
                  key={`inv-node-${i}`} 
                  className="chart-node"
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <text
                    x={x}
                    y={y + 20}
                    textAnchor="middle"
                    className="node-label investor-label"
                  >
                    {d.investor.toFixed(2).replace(".", ",")}%
                  </text>
                  <circle cx={x} cy={y} r="5" fill="#5282F6" stroke="#FFFFFF" strokeWidth="2" />
                </g>
              )
            })}
          </svg>

          {/* Month Labels on X Axis */}
          <div className="chart-x-axis">
            {data.map((d, i) => (
              <div key={i} className={`axis-col ${activeIdx === i ? "is-active" : ""}`}>
                <span className="axis-month">{d.month}</span>
                <span className="axis-year">{d.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
