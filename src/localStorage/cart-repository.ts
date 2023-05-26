import { OrderDTO } from "../models/order";

export function save (cart: OrderDTO){
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devsuperior.gkcommerce/cart", str);
}

export function get() : OrderDTO{
    const str = localStorage.getItem("com.devsuperior.gkcommerce/cart") || '{"items":[] }';
    return JSON.parse(str);
}