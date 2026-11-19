import React, { useState } from "react"
import "./Section8.scss"

export default function Section8() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Вклад «Комфорт»",
    agree: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setSubmitted(true)
  }

  return (
    <section id="consultation" className="consultation-section">
      <div className="container">
        <div className="consultation-banner">
          <div className="banner-content">
            <span className="banner-tag">Персональный расчет</span>
            <h2 className="banner-title">Получите бесплатную консультацию специалиста</h2>
            <p className="banner-desc">
              Наш эксперт свяжется с вами в течение 15 минут, ответит на все вопросы по программам и рассчитает индивидуальный график выплат.
            </p>

            <div className="banner-guarantees">
              <div className="g-item">
                <span className="g-icon">✓</span>
                <span>Без спама и навязывания</span>
              </div>
              <div className="g-item">
                <span className="g-icon">✓</span>
                <span>Расчет в день обращения</span>
              </div>
            </div>
          </div>

          <div className="banner-form-card">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Заявка успешно принята!</h3>
                <p>Мы свяжемся с вами по номеру <strong>{formData.phone}</strong> в ближайшее время.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Отправить новую заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="consultation-form">
                <div className="form-group">
                  <label>Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Например, Марат"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Номер телефона</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Интересующая программа</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="Вклад «Комфорт»">Вклад «Комфорт» (до 17,5%)</option>
                    <option value="Вклад «Активный»">Вклад «Активный» (до 16,5%)</option>
                    <option value="Авто Рассрочка">Авто Рассрочка (до 5 млн ₽)</option>
                    <option value="Экспресс Рассрочка">Экспресс Рассрочка (до 1 млн ₽)</option>
                    <option value="Финансирование бизнеса">Финансирование бизнеса</option>
                  </select>
                </div>

                <label className="checkbox-consent">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    required
                  />
                  <span>Я согласен на обработку персональных данных и ознакомлен с политикой конфиденциальности</span>
                </label>

                <button type="submit" className="btn btn-primary btn-submit-form">
                  Получить консультацию
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
