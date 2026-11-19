import React from "react"
import "./HowItWorks.scss"

const steps = [
  {
    num: "01",
    title: "Выберите вклад",
    desc: "Ознакомьтесь с линейкой продуктов и выберите подходящий: от 3 месяцев до 3 лет."
  },
  {
    num: "02",
    title: "Оставьте заявку",
    desc: "Заполните онлайн-форму или позвоните нам. Менеджер свяжется в течение 30 минут."
  },
  {
    num: "03",
    title: "Подпишите договор",
    desc: "Приезжайте в офис или оформите документы дистанционно — удобным для вас способом."
  },
  {
    num: "04",
    title: "Получайте доход",
    desc: "Деньги работают и приносят прибыль согласно выбранному плану выплат."
  }
]

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-intro">
          <span className="section-tag">Просто и прозрачно</span>
          <h2 className="section-main-title">Как начать инвестировать</h2>
        </div>

        <div className="how-steps">
          {steps.map((step, i) => (
            <div key={i} className="how-step">
              <div className="how-step__num">{step.num}</div>
              <div className="how-step__connector" />
              <h3 className="how-step__title">{step.title}</h3>
              <p className="how-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="how-cta">
          <a href="#invest-products" className="btn btn-primary how-cta-btn">
            Выбрать вклад
          </a>
          <a href="tel:+78432000000" className="btn btn-secondary how-cta-btn">
            Позвонить нам
          </a>
        </div>
      </div>
    </section>
  )
}
