import { Navigate } from "react-router-dom";
import * as authService from "../../services/auth-services";

type Props = {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {

    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    return children

}