import { CART_TOKEN } from "../utils/system";

export function save(token:string){
    localStorage.setItem(CART_TOKEN, token);
}

export function get(): string | null {
    return localStorage.getItem(CART_TOKEN);
}

export function remove(){
    localStorage.removeItem(CART_TOKEN);
}