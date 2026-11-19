import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Photo } from "../../../Images.js"
import "./InvestProducts.scss"

export default function InvestProducts() {
  const defaultProducts = [
    {
      id: "accumulative",
      category: "Инвестиции",
      title: "Вклад Накопительный",
      rate: "17,5%",
      rateLabel: "Доходность, до",
      term: "90 дней",
      termLabel: "Срок вклада, от",
      desc: "Доход выплачивается по окончании срока договора, возможно досрочное расторжение",
      btnPrimaryText: "Инвестировать",
      btnSecondaryText: "Подробнее",
      link: "/deposit-accumulative",
      image: Photo.HeroPerson
    },
    {
      id: "active",
      category: "Инвестиции",
      title: "Вклад Активный",
      rate: "16,5%",
      rateLabel: "Доходность, до",
      term: "90 дней",
      termLabel: "Срок вклада, от",
      desc: "Доход выплачивается по окончании срока договора, возможно досрочное расторжение",
      btnPrimaryText: "Инвестировать",
      btnSecondaryText: "Подробнее",
      link: "/deposit-active",
      image: Photo.ProductYoungSpecialist
    },
    {
      id: "comfort",
      category: "Инвестиции",
      title: "Вклад Комфорт",
      rate: "17,5%",
      rateLabel: "Доходность, до",
      term: "90 дней",
      termLabel: "Срок вклада, от",
      desc: "Доход выплачивается по окончании срока договора, возможно досрочное расторжение",
      btnPrimaryText: "Инвестировать",
      btnSecondaryText: "Подробнее",
      link: "/deposit-comfort",
      image: Photo.ProductSenior
    }
  ]

  const [products, setProducts] = useState(defaultProducts)

  useEffect(() => {
    fetch("http://localhost:3001/api/investments")
      .then((res) => {
        if (!res.ok) throw new Error("API not available")
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data) && data.length >= 3) {
          // Map DB items to our 3 visual cards
          const mapped = [
            {
              id: data[0].id || "accumulative",
              category: "Инвестиции",
              title: data[0].name || "Вклад Накопительный",
              rate: `${data[0].rate}%` || "17,5%",
              rateLabel: "Доходность, до",
              term: `${data[0].term_months * 30} дней` || "90 дней",
              termLabel: "Срок вклада, от",
              desc: data[0].description || defaultProducts[0].desc,
              btnPrimaryText: "Инвестировать",
              btnSecondaryText: "Подробнее",
              link: "/deposit-accumulative",
              image: Photo.HeroPerson
            },
            {
              id: data[1].id || "active",
              category: "Инвестиции",
              title: data[1].name || "Вклад Активный",
              rate: `${data[1].rate}%` || "16,5%",
              rateLabel: "Доходность, до",
              term: `${data[1].term_months * 30} дней` || "90 дней",
              termLabel: "Срок вклада, от",
              desc: data[1].description || defaultProducts[1].desc,
              btnPrimaryText: "Инвестировать",
              btnSecondaryText: "Подробнее",
              link: "/deposit-active",
              image: Photo.ProductYoungSpecialist
            },
            {
              id: data[2].id || "comfort",
              category: "Инвестиции",
              title: data[2].name || "Вклад Комфорт",
              rate: `${data[2].rate}%` || "17,5%",
              rateLabel: "Доходность, до",
              term: `${data[2].term_months * 30} дней` || "90 дней",
              termLabel: "Срок вклада, от",
              desc: data[2].description || defaultProducts[2].desc,
              btnPrimaryText: "Инвестировать",
              btnSecondaryText: "Подробнее",
              link: "/deposit-comfort",
              image: Photo.ProductSenior
            }
          ]
          setProducts(mapped)
        }
      })
      .catch(() => {
        // Fallback gracefully to default Figma mockups
      })
  }, [])

  return (
    <section id="invest-products" className="page2-products-section">
      <div className="container">
        {/* Dual Column Header matching Figma Node 22:219 */}
        <div className="products-section-header">
          <div className="header-left">
            <h2 className="products-title">Инвестиционные продукты</h2>
            <p className="products-lead">
              ИФК «НурФинанс» готов принимать инвестиции в сумме от 100 000 рублей сроком от 3-х месяцев до 3-х лет на следующих условиях:
            </p>
          </div>

          <div className="header-right">
            <p className="mudaraba-text">
              Вкладчик (инвестор) вносит денежные средства в капитал Товарищества на вере «НурФинанс», становясь участником Товарищества на вере, неся риск убытков, связанных с деятельностью Товарищества, в пределах внесенного вклада, но при этом не принимает участие в осуществлении Товариществом предпринимательской деятельности. Такая форма участия инвестора основана на Шариатском стандарте «Мудараба». По договору, клиент-инвестор передает в управление свой капитал компании «Нур Финанс». Далее капитал направляется на финансирование торговых операций и бизнес-проектов. Начисление дохода, причитающегося к выплате Вкладчику (Инвестору), осуществляется Товариществом ежемесячно.
            </p>
          </div>
        </div>

        {/* 3-Column Vertical Product Cards */}
        <div className="products-3cards-grid">
          {products.map((p) => (
            <div key={p.id} className="p2-product-card">
              <div className="p2-card-image-wrap">
                <img src={p.image} alt={p.title} className="p2-card-img" />
              </div>

              <div className="p2-card-body">
                <span className="p2-card-cat">{p.category}</span>
                <h3 className="p2-card-title">{p.title}</h3>

                <div className="p2-card-metrics">
                  <div className="p2-metric">
                    <span className="p2-metric-val">{p.rate}</span>
                    <span className="p2-metric-lbl">{p.rateLabel}</span>
                  </div>
                  <div className="p2-metric">
                    <span className="p2-metric-val">{p.term}</span>
                    <span className="p2-metric-lbl">{p.termLabel}</span>
                  </div>
                </div>

                <p className="p2-card-desc">{p.desc}</p>

                <div className="p2-card-actions">
                  <a href="#invest-calculator" className="p2-btn-primary">
                    {p.btnPrimaryText}
                  </a>
                  <Link to={p.link} className="p2-btn-secondary">
                    {p.btnSecondaryText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
