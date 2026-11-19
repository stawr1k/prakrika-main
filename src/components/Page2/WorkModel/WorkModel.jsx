import React from "react"
import { Photo } from "../../../Images.js"
import "./WorkModel.scss"

export default function WorkModel() {
  return (
    <section className="work-model-section">
      <div className="container">
        <h2 className="model-main-title">Модель работы</h2>

        <div className="model-diagram-card">
          {/* Top Row: Flow In and Flow Out */}
          <div className="diagram-top-row">
            <div className="flow-badge flow-left">
              <span className="flow-text">Ваш инвестиционный вклад</span>
              <span className="flow-chevrons">❯❯</span>
            </div>

            <div className="flow-badge flow-right">
              <span className="flow-chevrons">❯❯</span>
              <span className="flow-text">Финансирование</span>
            </div>
          </div>

          {/* Central Diagram Body: Investor - Center Emblem - Recipient */}
          <div className="diagram-center-row">
            {/* Left Participant: Investor */}
            <div className="participant participant--investor">
              <div className="participant-avatar">
                <img src={Photo.ModelInvestor} alt="Инвестор фонда" />
              </div>
              <div className="participant-info">
                <h3 className="participant-role">Инвестор фонда</h3>
                <div className="return-flow">
                  <span>Доход инвестора по вкладу</span>
                  <span className="flow-chevrons reverse">❮❮</span>
                </div>
              </div>
            </div>

            {/* Central 3-bar NurFinance emblem with arrows */}
            <div className="center-emblem">
              <div className="emblem-bars">
                <div className="bar bar-1"></div>
                <div className="bar bar-2">
                  <div className="arrow-up">▲</div>
                </div>
                <div className="bar bar-3">
                  <div className="arrow-down">▲</div>
                </div>
              </div>
            </div>

            {/* Right Participant: Recipient of financing */}
            <div className="participant participant--recipient">
              <div className="participant-info">
                <h3 className="participant-role">Получатель финансирования</h3>
                <div className="return-flow">
                  <span className="flow-chevrons reverse">❮❮</span>
                  <span>Возврат финансирования</span>
                </div>
              </div>
              <div className="participant-avatar">
                <img src={Photo.ModelBuilder} alt="Получатель финансирования" />
              </div>
            </div>
          </div>

          {/* Bottom Security / Risk Banner */}
          <div className="diagram-bottom-bracket">
            <p className="guarantee-text">
              Обеспечение реальными активами гарантирует полный возврат инвестиций.
            </p>
            <div className="risk-text">
              <span>‹</span> Возможный отрицательный результат <span>›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
