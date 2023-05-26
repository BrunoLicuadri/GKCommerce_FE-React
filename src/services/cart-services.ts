import * as cartRepository from '../localStorage/cart-repository.ts';
import { OrderDTO } from '../models/order';

export function saveCart(cart: OrderDTO){
    cartRepository.save(cart);
}

export function getCart(): OrderDTO{
    return cartRepository.get();
}