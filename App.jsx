import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import AboutUs from './components/AboutUs.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/plants" element={<PlantsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

function HomePage() {
  return (
    <main className="home-page">
      <Navbar />
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Plants for your everyday paradise</p>
          <h1>Let your space<br /><em>come alive.</em></h1>
          <p className="hero-text">Thoughtfully grown plants for homes that feel warm, wild, and wonderfully yours.</p>
          <div className="hero-actions">
            <Link className="button button-light" to="/plants">Get started <span aria-hidden="true">&#8594;</span></Link>
            <Link className="text-link" to="/about">Our story <span aria-hidden="true">&#8599;</span></Link>
          </div>
        </div>
        <div className="hero-note"><span>Since 2018</span><span className="note-line"></span><span>Grown with care</span></div>
      </section>
      <section className="home-follow">
        <div>
          <p className="eyebrow">A little more life</p>
          <h2>Good plants. Good energy.</h2>
        </div>
        <div className="follow-copy">
          <p>From first-time plant parents to devoted collectors, Paradise Nursery brings the right green companion to every corner.</p>
          <Link className="text-link dark-link" to="/about">Discover Paradise <span aria-hidden="true">&#8594;</span></Link>
        </div>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutUs />
    </>
  )
}

function PlantsPage() {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  )
}

function CartPage() {
  return (
    <>
      <Navbar />
      <CartItem />
    </>
  )
}

export default App
