import './styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import adminIcon from '../../assets/Images/adminIcon.svg';
import * as authService from "../../services/auth-services";
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';

export default function HeaderClient() {
    
    const {contextTokenPayload} = useContext(ContextToken);
    
    return (
        <header className="gkc-header-client">
            <nav className="gkc-container">
                <Link to="/">
                    <h1>GKCommerce</h1>
                </Link>
                <div className="gkc-navbar-right">
                    <div className="gkc-menu-items-container">
                        {
                            contextTokenPayload &&
                            authService.hasAnyRoles(['ROLE_ADMIN']) &&
                            <Link to="/admin">
                                <div className="gkc-menu-items">
                                    <img src={adminIcon} alt="Admin" />
                                </div>
                            </Link>
                        }
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