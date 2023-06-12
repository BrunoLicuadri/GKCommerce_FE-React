
import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-services';
import { useContext } from 'react';
import { ContextToken } from '../../utils/context-token';


export default function LoggedUser() {

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    return (
        contextTokenPayload && authService.isAuthenticated()
            ? (
                <div className="gkc-logged-user">
                    <p>{contextTokenPayload.user_name}</p>
                    <span onClick={handleLogoutClick}>Sair</span>
                </div>
            )
            : (
                <Link to="/login">
                    <a href="#">Entrar</a >
                </Link >
            )
    );
}