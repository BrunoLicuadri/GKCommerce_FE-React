import './styles.css';

import cartIcon from '../../assets/Images/cart.svg';

export default function HeaderClient() {
    return (
        <header className="gkc-header-client">
            <nav className="gkc-container">
                <h1>GKCommerce</h1>
                <div className="gkc-navbar-right">
                    <div className="gkc-menu-items-container">
                        <div className="gkc-menu-items">
                            <img src={cartIcon} alt="Carrinho de Compras" />
                        </div>
                    </div>
                    <a href="#">Entrar</a>
                </div>

            </nav>
        </header>
    );
}