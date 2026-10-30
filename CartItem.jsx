import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from '../redux/CartSlice.jsx'
import { Link } from 'react-router-dom'

function CartItem() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const showCheckoutMessage = () => {
        window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.')
    }

    return (
        <main className="page-shell cart-page">
            <div className="cart-heading">
                <div>
                    <p className="eyebrow">Your little jungle</p>
                    <h1>Shopping cart</h1>
                </div>
                <span>{items.length} {items.length === 1 ? 'item' : 'items'}</span>
            </div>

            {items.length === 0 ? (
                <section className="empty-cart">
                    <span className="empty-icon">&#127793;</span>
                    <h2>Your cart is ready to grow.</h2>
                    <p>Choose a plant and we will take it from here.</p>
                    <Link className="button button-dark" to="/plants">Browse plants <span aria-hidden="true">&#8594;</span></Link>
                </section>
            ) : (
                <div className="cart-layout">
                    <section className="cart-items">
                        {items.map((item) => (
                            <article className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-info">
                                    <h2>{item.name}</h2>
                                    <p>${item.price.toFixed(2)} each</p>
                                    <div className="quantity-controls">
                                        <button
                                            aria-label={`Decrease ${item.name} quantity`}
                                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            aria-label={`Increase ${item.name} quantity`}
                                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <strong className="item-total">${(item.price * item.quantity).toFixed(2)}</strong>
                                <button
                                    className="delete-button"
                                    aria-label={`Delete ${item.name}`}
                                    onClick={() => dispatch(removeItem(item.id))}
                                >
                                    &#10005;
                                </button>
                            </article>
                        ))}
                    </section>

                    <aside className="order-summary">
                        <p className="eyebrow">Order summary</p>
                        <div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
                        <div><span>Delivery</span><span className="free-label">Free</span></div>
                        <hr />
                        <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
                        <button className="button button-dark checkout-button" onClick={showCheckoutMessage}>Checkout <span aria-hidden="true">&#8594;</span></button>
                        <Link className="continue-link" to="/plants">Continue shopping</Link>
                    </aside>
                </div>
            )}
        </main>
    )
}

export default CartItem
