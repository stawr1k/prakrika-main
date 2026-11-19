import React, { useEffect } from "react"
// Reused from Page 1
import Section4 from "../../components/Page1/Section4/Section4.jsx"

// Page 2 Specific Components (1:1 with Figma Node 22:219)
import InvestHero from "../../components/Page2/InvestHero/InvestHero.jsx"
import InvestBadges from "../../components/Page2/InvestBadges/InvestBadges.jsx"
import SmartInvest from "../../components/Page2/SmartInvest/SmartInvest.jsx"
import YieldChart from "../../components/Page2/YieldChart/YieldChart.jsx"
import InvestProducts from "../../components/Page2/InvestProducts/InvestProducts.jsx"
import ConsultationBanner from "../../components/Page2/ConsultationBanner/ConsultationBanner.jsx"
import WorkModel from "../../components/Page2/WorkModel/WorkModel.jsx"
import InvestApplication from "../../components/Page2/InvestApplication/InvestApplication.jsx"
import "./Page2.scss"

export default function Page2() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Инвестиции в НурФинанс — доходность до 19% годовых"
  }, [])

  return (
    <div className="page2">
      {/* 1. Breadcrumbs + Hero Banner */}
      <InvestHero />

      {/* 2. Four Principles / Badges */}
      <InvestBadges />

      {/* 3. Interactive Calculator (reused from Page 1) */}
      <Section4 />

      {/* 4. Smart Investments Section */}
      <SmartInvest />

      {/* 5. Yield Chart Section (11 Months) */}
      <YieldChart />

      {/* 6. Investment Products (3 Cards + Mudaraba Header) */}
      <InvestProducts />

      {/* 7. Questions / Consultation Banner */}
      <ConsultationBanner />

      {/* 8. Work Model Flow Diagram */}
      <WorkModel />

      {/* 9. Online Application Form */}
      <InvestApplication />
    </div>
  )
}
