import { requestBackend } from "../utils/requests";
import * as authService from '../services/auth-services';

export function findMe() {
    const headers = {
        Authorization: "Bearer " + authService.getAccessToken()
    }

    return requestBackend({ url: `users/me`, headers });
}