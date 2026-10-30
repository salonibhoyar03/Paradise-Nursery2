import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <main className="about-page page-shell">
            <section className="about-intro">
                <p className="eyebrow">Rooted in joy</p>
                <h1>Plants make room for a better kind of everyday.</h1>
                <p className="lead">Paradise Nursery is a small, thoughtful plant shop for people who want to bring more life home. We choose resilient plants, wrap them with care, and share the know-how to help them thrive.</p>
            </section>
            <div className="about-grid">
                <article><span className="about-number">01</span><h2>Our mission</h2><p>Make plant care feel welcoming, practical, and full of small wins for every kind of home.</p></article>
                <article><span className="about-number">02</span><h2>Our vision</h2><p>A greener world where every windowsill, balcony, and garden has room to grow.</p></article>
                <article><span className="about-number">03</span><h2>What we offer</h2><p>Houseplants, outdoor growers, succulents, care guides, and a little encouragement when you need it.</p></article>
            </div>
            <section className="choose-us">
                <div><p className="eyebrow">The Paradise promise</p><h2>Why choose us?</h2></div>
                <ul><li><strong>Curated plants</strong><span>We select beautiful, healthy varieties that suit real homes.</span></li><li><strong>Honest guidance</strong><span>Simple advice, clear expectations, zero green-thumb gatekeeping.</span></li><li><strong>Carefully packed</strong><span>Every order is prepared as if it were joining our own collection.</span></li></ul>
            </section>
            <Link className="button button-dark" to="/plants">Meet the collection <span aria-hidden="true">&#8594;</span></Link>
        </main>
    )
}

export default AboutUs
