import './styles.css';
import homeIcon from '../../assets/Images/home.svg';
import productsIcon from '../../assets/Images/products.svg';
import LoggedUser from '../LoggedUser';

export default function HeaderAdmin() {

    return (
        <header className="gkc-header-admin">
            <nav className="gkc-container">
                <h1>GKC Admin</h1>
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
                    <LoggedUser/>
                </div>
            </nav>
        </header>
    );
}