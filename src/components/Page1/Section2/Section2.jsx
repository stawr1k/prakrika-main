import React from "react"
import { Link } from "react-router-dom"
import { Photo } from "../../../Images.js"
import "./Section2.scss"

export default function Section2() {
  const topProducts = [
    {
      id: "comfort",
      category: "Инвестиции",
      title: "Вклад Комфорт",
      metric1Value: "17,5%",
      metric1Label: "Доходность, до",
      metric2Value: "90 дней",
      metric2Label: "Срок вклада, от",
      description: "Доход выплачивается по окончании срока договора, возможно досрочное расторжение",
      btnPrimaryText: "Инвестировать",
      btnPrimaryLink: "#calculator",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/deposit-comfort",
      image: Photo.ProductSenior,
      cardType: "wide",
      imgModifier: "img-comfort"
    },
    {
      id: "auto",
      category: "Финансирование",
      title: "Авто Рассрочка",
      metric1Value: "5 млн",
      metric1Label: "Сумма, до",
      metric2Value: "3 лет",
      metric2Label: "Срок, до",
      description: "Отсутствие обязательности страхования КАСКО. Первоначальный взнос от 10%",
      btnPrimaryText: "Оформить",
      btnPrimaryLink: "#calculator",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/auto-installment",
      image: Photo.ProductCar,
      cardType: "narrow",
      imgModifier: "img-car"
    }
  ]

  const bottomProducts = [
    {
      id: "express",
      category: "Финансирование",
      title: "Экспресс Рассрочка",
      metric1Value: "1 млн",
      metric1Label: "Сумма, до",
      metric2Value: "3 лет",
      metric2Label: "Срок, до",
      description: "Финансирование физических лиц для приобретения необходимых товаров",
      btnPrimaryText: "Оформить",
      btnPrimaryLink: "#calculator",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/express-installment",
      image: Photo.ProductWashingMachine,
      cardType: "narrow",
      imgModifier: "img-washer"
    },
    {
      id: "active",
      category: "Инвестиции",
      title: "Вклад Активный",
      metric1Value: "16,5%",
      metric1Label: "Доходность, до",
      metric2Value: "90 дней",
      metric2Label: "Срок вклада, от",
      description: "Доход выплачивается по окончании срока договора, возможно досрочное расторжение",
      btnPrimaryText: "Инвестировать",
      btnPrimaryLink: "#calculator",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/deposit-active",
      image: Photo.ProductYoungSpecialist,
      cardType: "wide",
      imgModifier: "img-active"
    }
  ]

  const renderCard = (product) => (
    <div key={product.id} className={`product-card product-card--${product.cardType}`}>
      <div className="product-card__content">
        <div className="product-card__top">
          <span className="product-category">
            {product.category}
          </span>
          <h3 className="product-title">{product.title}</h3>

          <div className="product-metrics">
            <div className="metric-box">
              <span className="metric-val">{product.metric1Value}</span>
              <span className="metric-lbl">{product.metric1Label}</span>
            </div>
            <div className="metric-box">
              <span className="metric-val">{product.metric2Value}</span>
              <span className="metric-lbl">{product.metric2Label}</span>
            </div>
          </div>

          <p className="product-desc">{product.description}</p>
        </div>

        <div className="product-actions">
          <a href={product.btnPrimaryLink} className="card-btn-primary">
            {product.btnPrimaryText}
          </a>
          <Link to={product.btnSecondaryLink} className="card-btn-secondary">
            {product.btnSecondaryText}
          </Link>
        </div>
      </div>

      <div className={`product-card__image-wrap ${product.imgModifier}`}>
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
    </div>
  )

  return (
    <section className="recommended-products-section">
      <div className="container">
        <h2 className="section-main-title">Рекомендуемые продукты</h2>

        <div className="products-grid">
          <div className="products-row products-row--top">
            {topProducts.map(renderCard)}
          </div>
          <div className="products-row products-row--bottom">
            {bottomProducts.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  )
}
