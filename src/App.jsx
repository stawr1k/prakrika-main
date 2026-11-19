import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Page1 from './pages/Page1/Page1.jsx'
import Page2 from './pages/Page2/Page2.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"            element={<Page1 />} />
          <Route path="/investments" element={<Page2 />} />
          <Route path="/page2"       element={<Page2 />} />
          <Route path="*"            element={<Page1 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
