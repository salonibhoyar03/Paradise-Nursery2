import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/CartSlice.jsx'
import { Link } from 'react-router-dom'
import plants from '../data/plants.js'

const categories = ['Indoor Plants', 'Outdoor Plants', 'Succulents']

function ProductList() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)

    return (
        <main className="page-shell catalog-page">
            <section className="catalog-heading"><div><p className="eyebrow">The living collection</p><h1>Find your next favorite plant.</h1></div><p>Small rituals, bright corners, and a little more green. Browse our plants by mood and make your space feel like yours.</p></section>
            <div className="category-tabs"><Link to="/plants">All plants</Link>{categories.map((category) => <a key={category} href={`#${category.replace(' ', '-').toLowerCase()}`}>{category}</a>)}</div>
            {categories.map((category) => (
                <section className="category-section" id={category.replace(' ', '-').toLowerCase()} key={category}>
                    <div className="category-title"><h2>{category}</h2><span>{plants.filter((plant) => plant.category === category).length} plants</span></div>
                    <div className="product-grid">
                        {plants.filter((plant) => plant.category === category).map((plant) => {
                            const inCart = cartItems.some((item) => item.id === plant.id)
                            return <article className="product-card" key={plant.id}>
                                <div className="product-image"><img src={plant.image} alt={plant.name} loading="lazy" /><span className="plant-tag">{category.replace(' Plants', '')}</span></div>
                                <div className="product-info"><div className="product-meta"><h3>{plant.name}</h3><span>${plant.price.toFixed(2)}</span></div><p>{plant.description}</p><button className={`add-button ${inCart ? 'is-added' : ''}`} disabled={inCart} onClick={() => dispatch(addItem(plant))}>{inCart ? 'Added to cart' : 'Add to cart'} <span aria-hidden="true">{inCart ? '&#10003;' : '&#43;'}</span></button></div>
                            </article>
                        })}
                    </div>
                </section>
            ))}
        </main>
    )
}

export default ProductList
