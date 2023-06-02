import './styles.css';
import homeIcon from '../../assets/Images/home.svg';
import productsIcon from '../../assets/Images/products.svg';

export default function HeaderAdmin() {
    return (
        <header className="gkc-header-admin">
            <nav className="gkc-container">
                <h1>DSC Admin</h1>
                <div className="gkc-navbar-right">
                    <div className="gkc-menu-items-container">
                        <div className="gkc-menu-items">
                            <img src={homeIcon} alt="Início" />
                            <p>Início</p>
                        </div>
                        <div className="gkc-menu-items">
                            <img src={productsIcon} alt="Cadastro de produtos" />
                            <p className="gkc-menu-item-active">Produtos</p>
                        </div>
                    </div>
                    <div className="gkc-logged-user">
                        <p>Maria Silva</p>
                        <a href="#">Sair</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}