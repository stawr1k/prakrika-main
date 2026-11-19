import React, { useState } from "react"
import { Photo } from "../../../Images.js"
import "./InvestApplication.scss"

export default function InvestApplication() {
  const [fio, setFio] = useState("Иванов Алексей Петрович")
  const [phone, setPhone] = useState("+7 (999) 000-00-00")
  const [email, setEmail] = useState("Name@mail.com")
  const [birthDate, setBirthDate] = useState("26.01.1984")
  const [citizenship, setCitizenship] = useState("Имею гражданство РФ")
  const [city, setCity] = useState("Казань")

  const [amount, setAmount] = useState(1000000)
  const [term, setTerm] = useState(24)
  const [deposit, setDeposit] = useState(10000)

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  const formatRuble = (val) => {
    return val.toLocaleString("ru-RU") + " ₽"
  }

  return (
    <section id="invest-application" className="invest-application-section">
      <div className="container">
        <div className="application-card">
          <div className="application-main">
            <h2 className="app-title">Онлайн-заявка вкладчика</h2>

            {submitted ? (
              <div className="app-success-box">
                <div className="check-icon">✓</div>
                <h3>Спасибо! Ваша заявка принята</h3>
                <p>Мы свяжемся с вами в течение 30 минут для согласования деталей вклада.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="app-form">
                <div className="app-columns-grid">
                  {/* Column 1: Contact Details */}
                  <div className="app-col">
                    <span className="col-heading">Контактные данные</span>

                    <div className="app-field">
                      <label>Фамилия, Имя и Отчество</label>
                      <input
                        type="text"
                        value={fio}
                        onChange={(e) => setFio(e.target.value)}
                        required
                      />
                    </div>

                    <div className="app-field">
                      <label>Мобильный телефон</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="app-field">
                      <label>Электронная почта</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="app-field">
                      <label>Дата рождения</label>
                      <input
                        type="text"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                      />
                    </div>

                    <div className="app-field">
                      <label>Гражданство</label>
                      <select
                        value={citizenship}
                        onChange={(e) => setCitizenship(e.target.value)}
                      >
                        <option value="Имею гражданство РФ">Имею гражданство РФ</option>
                        <option value="Иностранный гражданин">Иностранный гражданин</option>
                      </select>
                    </div>

                    <div className="app-field">
                      <label>Город проживания</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Column 2: Deposit Parameters */}
                  <div className="app-col">
                    <span className="col-heading">Параметры вклада</span>

                    {/* Amount Slider */}
                    <div className="app-slider-box">
                      <div className="slider-header">
                        <span className="slider-lbl">Сумма вклада</span>
                        <span className="slider-val">{formatRuble(amount)}</span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="10000000"
                        step="50000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="custom-range"
                      />
                    </div>

                    {/* Term Slider */}
                    <div className="app-slider-box">
                      <div className="slider-header">
                        <span className="slider-lbl">Срок инвестирования</span>
                        <span className="slider-val">{term} месяца</span>
                      </div>
                      <input
                        type="range"
                        min="3"
                        max="36"
                        step="1"
                        value={term}
                        onChange={(e) => setTerm(Number(e.target.value))}
                        className="custom-range"
                      />
                    </div>

                    {/* Deposit replenishment */}
                    <div className="app-slider-box">
                      <div className="slider-header">
                        <span className="slider-lbl">Пополнение вклада</span>
                        <span className="slider-val">{formatRuble(deposit)} / в месяц</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="5000"
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        className="custom-range"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="app-bottom-row">
                  <button type="submit" className="btn-app-submit">
                    Оформить заявку
                  </button>
                  <span className="app-disclaimer">
                    Заполняя форму, я принимаю <a href="#privacy">условия передачи информации</a>
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Image: Young specialist with laptop */}
          <div className="application-visual">
            <img src={Photo.HeroPage2Man} alt="Специалист НурФинанс" className="app-man-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
