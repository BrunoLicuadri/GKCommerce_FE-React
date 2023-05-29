import './styles.css';
import cartIcon from '../../assets/Images/cart.svg';
import * as cartService from '../../services/cart-services';
import { useState } from 'react';

export default function () {

    const [cart, setCart] = useState(cartService.getCart());

    return (
        <>
            <img src={cartIcon} alt="Carrinho de Compras" />
            <div className="gkc-cart-count">{cart.items.length}</div>
        </>

    )
}
