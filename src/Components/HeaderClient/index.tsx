import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';

export default function HeaderClient() {
    return (
        <header className="gkc-header-client">
            <nav className="gkc-container">
                <Link to="/">
                    <h1>GKCommerce</h1>
                </Link>
                <div className="gkc-navbar-right">
                    <div className="gkc-menu-items-container">
                        <Link to="/cart">
                            <div className="gkc-menu-items">
                                <CartIcon />
                            </div>
                        </Link>
                    </div>
                    <Link to="/login">
                        <a href="#">Entrar</a>
                    </Link>

                </div>

            </nav>
        </header>
    );
}