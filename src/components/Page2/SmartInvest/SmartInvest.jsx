import React, { useState } from "react"
import { Photo } from "../../../Images.js"
import "./SmartInvest.scss"

export default function SmartInvest() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="smart-invest-section">
      <div className="container smart-invest-grid">
        {/* Left Column: Photo with organic curve + Video CTA button */}
        <div className="smart-invest-left">
          <div className="photo-frame">
            <img src={Photo.SmartInvestMan} alt="Видео о работе компании" className="man-phone-img" />
          </div>

          <button 
            className="video-btn-pill" 
            onClick={() => setModalOpen(true)}
            aria-label="Смотреть видео о работе компании"
          >
            <span>Видео о работе компании</span>
            <span className="play-circle">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#002EF5">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </span>
          </button>
        </div>

        {/* Right Column: Title, Subtitle, 2 numbered items */}
        <div className="smart-invest-right">
          <h2 className="smart-title">Разумные инвестиции</h2>
          <p className="smart-intro">
            Вкладывая свои деньги в ИФК «Нур Финанс», инвестор получает:
          </p>

          <div className="smart-points">
            <div className="smart-point-item">
              <div className="point-badge">1</div>
              <h3 className="point-heading">Долю в имуществе и активах компании</h3>
            </div>

            <div className="smart-point-item has-desc">
              <div className="point-badge">2</div>
              <div className="point-content">
                <h3 className="point-heading">Долю в прибыли компании</h3>
                <p className="point-text">
                  От торговых операций, обеспеченных реальными активами. Доля в прибыли инвестора закрепляется в договоре в соответствии с условиями, которые зависят от суммы и срока инвестиционного вклада. В случае отрицательного финансового результата, убытки распределяются между инвесторами пропорционально доле каждого инвестора (вкладчика) в общем капитале компании.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div className="video-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setModalOpen(false)}>✕</button>
            <div className="video-iframe-wrapper">
              <iframe
                title="О компании НурФинанс"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
