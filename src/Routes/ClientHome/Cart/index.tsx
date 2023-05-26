import './styles.css';
import { useState } from 'react';
import * as cartService from '../../../services/cart-services';
import { OrderDTO, OrderItemDTO } from '../../../models/order';

const item1: OrderItemDTO = new OrderItemDTO(
    4, 1, "Pc Gamer", 1200,"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
)

const item2: OrderItemDTO = new OrderItemDTO(
    5, 2, "Rails for Dummies", 100.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
)


export default function Cart() {

    const [cart, setCart] = useState <OrderDTO>(cartService.getCart());

    return (
        <main>
            <section id="cart-container-section" className="gkc-container" >
                <div className="dsc-card dsc-mb20">
                    {
                        cart.items.map(item => (
                            <div key={item.productId} className="dsc-cart-item-container dsc-line-button">
                                <div className="dsc-cart-item-left">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="dsc-cart-item-description">
                                        <h3>{item.name} </h3>
                                        <div className="dsc-cart-item-quantity-container">
                                            <div className="dsc-cart-item-quantity-btn"> - </div>
                                            <p> {item.quantity} </p>
                                            <div className="dsc-cart-item-quantity-btn"> + </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dsc-cart-item-right">
                                    R$ {(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    }

                    <div className="dsc-cart-total-container">
                        <h3> R$ 15000,00 </h3>
                    </div>

                    <div className="gkc-btn-container" >
                        <div className="gkc-btn gkc-btn-blue">
                            Finalizar Pedido
                        </div>
                        <div className="gkc-btn gkc-btn-white">
                            Continuar Comprando
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}