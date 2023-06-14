import './styles.css';
import homeIcon from '../../assets/Images/home.svg';
import productsIcon from '../../assets/Images/products.svg';
import LoggedUser from '../LoggedUser';
import { NavLink } from 'react-router-dom';

export default function HeaderAdmin() {

    return (
        <header className="gkc-header-admin">
            <nav className="gkc-container">
                <h1>GKC Admin</h1>
                <div className="gkc-navbar-right">
                    <div className="gkc-menu-items-container">

                        <NavLink
                            to="/admin/home"
                            className={({ isActive }) => isActive ? "gkc-menu-items-active" : "gkc-menu-items-non-active"}
                        >
                            <div className="gkc-menu-items">
                                <img src={homeIcon} alt="Início" />
                                <p>Início</p>
                            </div>
                        </NavLink>

                        <NavLink
                            to="/admin/products"
                            className={({ isActive }) => isActive ? "gkc-menu-items-active" : "gkc-menu-items-non-active"}
                        >
                            <div className="gkc-menu-items">
                                <img src={productsIcon} alt="Cadastro de produtos" />
                                <p>Produtos</p>
                            </div>
                        </NavLink>

                    </div>
                    <LoggedUser />
                </div>
            </nav>
        </header>
    );
}