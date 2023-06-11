import { Navigate } from "react-router-dom";
import { RoleEnum } from "../../models/auth";
import * as authService from "../../services/auth-services";

type Props = {
    children: JSX.Element;
    roles?: RoleEnum[]
}

export default function PrivateRoute({ children, roles = [] }: Props) {

    if (!authService.isAuthenticated()) {
        return <Navigate to="/login" />;
    }
    if (!authService.hasAnyRoles(roles)) {
        return <Navigate to="/catalog" />;
    }
    return children

}