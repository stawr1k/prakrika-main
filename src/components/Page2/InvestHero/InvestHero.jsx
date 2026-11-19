import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Photo } from "../../../Images.js"
import "./InvestHero.scss"

export default function InvestHero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      titlePrefix: "Максимальная доля прибыли по вкладам",
      highlight: "НурФинанс",
      subtitle: "Инвестор получает наибольший капитализированный доход",
      btnText: "Инвестиционные продукты",
      btnLink: "#invest-products",
      image: Photo.HeroPage2Man
    },
    {
      titlePrefix: "Инвестируйте с повышенной доходностью до",
      highlight: "19% годовых",
      subtitle: "100% обеспеченность активами, прибыль каждые 3 месяца!",
      btnText: "Инвестиционные продукты",
      btnLink: "#invest-products",
      image: Photo.HeroPage2Man
    },
    {
      titlePrefix: "Этичные партнерские инвестиции по",
      highlight: "нормам Шариата",
      subtitle: "Строгий аудит сделок и распределение прибыли по стандарту Мудараба",
      btnText: "Инвестиционные продукты",
      btnLink: "#invest-products",
      image: Photo.HeroPage2Man
    }
  ]

  const current = slides[activeSlide]

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="invest-hero-section">
      <div className="container">
        {/* Breadcrumbs - 1:1 Figma Node 22:219 */}
        <div className="breadcrumbs">
          <Link to="/" className="breadcrumb-link">Главная</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Инвестиции</span>
        </div>

        {/* Hero Card Container */}
        <div className="invest-hero-card">
          <div className="invest-hero-card__content">
            <h1 className="hero-h1">
              {current.titlePrefix}{" "}
              <span className="highlight-blue">{current.highlight}</span>
            </h1>

            <p className="hero-sub">{current.subtitle}</p>

            <div className="hero-actions-row">
              <a href={current.btnLink} className="btn-hero-invest">
                {current.btnText}
              </a>

              {/* 5 Indicator Dots */}
              <div className="hero-dots">
                <span className={`dot-pill ${activeSlide === 0 ? "active" : ""}`} onClick={() => setActiveSlide(0)} />
                <span className={`dot-circle ${activeSlide === 1 ? "active" : ""}`} onClick={() => setActiveSlide(1)} />
                <span className={`dot-circle ${activeSlide === 2 ? "active" : ""}`} onClick={() => setActiveSlide(2)} />
                <span className="dot-circle" />
                <span className="dot-circle" />
              </div>
            </div>
          </div>

          <div className="invest-hero-card__visual">
            <img src={current.image} alt="НурФинанс инвестиции" className="hero-man-img" />

            {/* Slider Navigation Arrows */}
            <div className="hero-arrows">
              <button onClick={handlePrev} className="arrow-btn" aria-label="Предыдущий слайд">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button onClick={handleNext} className="arrow-btn" aria-label="Следующий слайд">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
