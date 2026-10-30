import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const itemCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0))

    return (
        <header className="site-header">
            <Link className="brand" to="/">
                <span className="brand-mark">PN</span>
                <span>Paradise <em>Nursery</em></span>
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/plants">Plants</NavLink>
                <NavLink className="cart-link" to="/cart">
                    <span aria-hidden="true">&#128722;</span> Cart <b>{itemCount}</b>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
