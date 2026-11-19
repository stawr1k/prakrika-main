import React, { useState } from "react"
import { Photo } from "../../../Images.js"
import "./Section6.scss"

export default function Section6() {
  const [activeVideo, setActiveVideo] = useState(null)

  const reviews = [
    {
      id: 1,
      name: "Евгений Садков",
      program: "Программа — Экспресс Рассрочка",
      avatar: Photo.ReviewPerson1
    },
    {
      id: 2,
      name: "Анастасия Майер",
      program: "Инвестиции — Вклад Активный",
      avatar: Photo.ReviewPerson2
    },
    {
      id: 3,
      name: "Фанзиль Гарипов",
      program: "Программа — Авто Рассрочка",
      avatar: Photo.ReviewPerson3
    }
  ]

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-outer-card">
          <div className="section-head">
            <h2 className="section-title">Отзывы клиентов</h2>
            <div className="slider-arrows">
              <button className="arrow-btn" aria-label="Предыдущий отзыв">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="arrow-btn" aria-label="Следующий отзыв">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((item) => (
              <div key={item.id} className="review-card">
                <div 
                  className="review-video-thumb"
                  onClick={() => setActiveVideo(item.name)}
                >
                  <img src={item.avatar} alt={item.name} className="thumb-img" />
                </div>

                <div className="review-meta">
                  <h4 className="reviewer-name">{item.name}</h4>
                  <span className="reviewer-program">{item.program}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-footer">
            <a href="#reviews" className="btn btn-secondary btn-more-reviews">
              Смотреть больше отзывов
            </a>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Видео-отзыв: {activeVideo}</h3>
              <button className="close-btn" onClick={() => setActiveVideo(null)}>✕</button>
            </div>
            <div className="modal-player-mock">
              <div className="play-icon-large">▶</div>
              <p>Воспроизведение видео-отзыва: {activeVideo}...</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
