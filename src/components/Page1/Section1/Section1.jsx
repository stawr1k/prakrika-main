import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Photo } from "../../../Images.js"
import "./Section1.scss"

import "swiper/css"
import "swiper/css/navigation"

export default function Section1() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const slidesData = [
    {
      titlePrefix: "Инвестируйте с повышенной доходностью до",
      highlight: "19% годовых",
      subtitle: "100% обеспеченность активами, прибыль каждые 3 месяца!",
      btnPrimaryText: "Инвестировать",
      btnPrimaryLink: "#calculator",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/investments",
      bgNumber: "19",
      image: Photo.HeroPerson
    },
    {
      titlePrefix: "Честная авторассрочка на новые и авто с пробегом",
      highlight: "до 5 млн ₽",
      subtitle: "Первоначальный взнос от 10%, отсутствие навязанного КАСКО и скрытых переплат.",
      btnPrimaryText: "Подобрать авто",
      btnPrimaryLink: "/auto-installment",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/installment",
      bgNumber: "0%",
      image: Photo.HeroSlide2
    },
    {
      titlePrefix: "Этичные партнерские инвестиции по",
      highlight: "нормам Шариата",
      subtitle: "Полное соответствие международным стандартам и строгий аудит каждой сделки.",
      btnPrimaryText: "Узнать больше",
      btnPrimaryLink: "/halal",
      btnSecondaryText: "Подробнее",
      btnSecondaryLink: "/about",
      bgNumber: "10+",
      image: Photo.HeroSlide3
    }
  ]

  const totalDots = 5

  return (
    <section className="hero-section">
      <div className="hero-container container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex % slidesData.length)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          className="hero-swiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="hero-slide">
              <div className="hero-slide__content">
                <h1 className="hero-title">
                  {slide.titlePrefix} <span className="highlight">{slide.highlight}</span>
                </h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-actions-row">
                  <a href={slide.btnPrimaryLink} className="btn btn-primary hero-btn-primary">
                    {slide.btnPrimaryText}
                  </a>
                  <Link to={slide.btnSecondaryLink} className="btn btn-secondary hero-btn-secondary">
                    {slide.btnSecondaryText}
                  </Link>

                  {/* 5 Dots pagination on the same horizontal line as in Figma 16:115 & 16:194 */}
                  <div className="hero-dots">
                    {Array.from({ length: totalDots }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`hero-dot ${currentSlide === i ? "is-active" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-slide__visual">
                <div className="visual-wrapper">
                  {/* Subtle 3D background number */}
                  <div className="bg-decor-number">{slide.bgNumber}</div>
                  
                  {/* Floating geometric polygons */}
                  <div className="crystal-shape crystal-1"></div>
                  <div className="crystal-shape crystal-2"></div>
                  <div className="crystal-shape crystal-3"></div>

                  {/* Main Hero Photo */}
                  <img src={slide.image} alt="НурФинанс инвестиции" className="hero-person-img" />
                </div>
              </div>

              {/* Slider Arrow Buttons (Node 16:194: 86x40px, horizontal, aligned with action row & right margin) */}
              <div className="hero-slider-arrows">
                <button ref={prevRef} className="hero-arrow-btn prev-btn" aria-label="Предыдущий слайд">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button ref={nextRef} className="hero-arrow-btn next-btn" aria-label="Следующий слайд">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
