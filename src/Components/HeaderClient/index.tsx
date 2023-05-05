import './styles.css';

import cartIcon from '../../assets/Images/cart.svg';
import { Link } from 'react-router-dom';

export default function HeaderClient() {
    return (
        <header className="gkc-header-client">
            <nav className="gkc-container">
                <Link to="/">
                    <h1>GKCommerce</h1>
                </Link>
                <div className="gkc-navbar-right">
                    <div className="gkc-menu-items-container">
                        <div className="gkc-menu-items">
                            <Link to="/cart">
                                <img src={cartIcon} alt="Carrinho de Compras" />
                            </Link>

                        </div>
                    </div>
                    <Link to="/login">
                        <a href="#">Entrar</a>
                    </Link>

                </div>

            </nav>
        </header>
    );
}