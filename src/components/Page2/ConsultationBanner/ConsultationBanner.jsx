import React, { useState } from "react"
import { Photo } from "../../../Images.js"
import "./ConsultationBanner.scss"

export default function ConsultationBanner() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!phone) return
    setFormSubmitted(true)
    setTimeout(() => {
      setModalOpen(false)
      setFormSubmitted(false)
      setPhone("")
    }, 2500)
  }

  return (
    <section className="consult-banner-section">
      <div className="container">
        <div className="consult-card">
          <div className="consult-card__content">
            <h2 className="consult-title">У вас остались вопросы?</h2>
            <h3 className="consult-highlight">Закажите консультацию специалиста</h3>
            <p className="consult-desc">
              Мы подробно ответим на все ваши вопросы и подберем наиболее удобный вариант вклада
            </p>

            <div className="consult-actions">
              <button className="btn-consult-primary" onClick={() => setModalOpen(true)}>
                Заказать консультацию
              </button>
              <a href="#chat" className="btn-consult-secondary" onClick={(e) => { e.preventDefault(); setModalOpen(true); }}>
                Онлайн чат
              </a>
            </div>
          </div>

          <div className="consult-card__visual">
            <img src={Photo.ConsultSpecialist} alt="Консультация специалиста" className="consult-man-img" />
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {modalOpen && (
        <div className="consult-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="consult-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>✕</button>

            {formSubmitted ? (
              <div className="modal-success">
                <div className="success-icon">✓</div>
                <h3>Заявка отправлена!</h3>
                <p>Наш специалист перезвонит вам в течение 15 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modal-form">
                <h3>Заказать консультацию</h3>
                <p>Оставьте номер телефона, и мы подробно ответим на ваши вопросы</p>

                <div className="form-group">
                  <label>Ваш телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-modal-submit">
                  Жду звонка
                </button>
                <span className="modal-privacy">
                  Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
                </span>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
