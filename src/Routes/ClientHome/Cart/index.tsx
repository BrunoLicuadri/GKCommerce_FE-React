import './styles.css';
import { useState } from 'react';
import * as cartService from '../../../services/cart-services';
import { OrderDTO, OrderItemDTO } from '../../../models/order';
import { Link } from 'react-router-dom';


export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

    function handleCleaClick(){
        cartService.clearCart();
        setCart(cartService.getCart());
    }

    function handleIncreaseItem(productId: number){
        cartService.increaseItem(productId);
        setCart(cartService.getCart());
    }

    function handleDecreaseItem(productId: number){
        cartService.decreaseItem(productId);
        setCart(cartService.getCart());
    }

    return (
        <main>
            <section id="cart-container-section" className="gkc-container" >
                {
                    cart.items.length === 0
                        ? (
                            <div>
                                <h2 className='gkc-section-title gkc-mb20'>
                                    Seu carrinho está vazio.
                                </h2>
                            </div>
                        )
                        : (
                            <div className="dsc-card dsc-mb20">
                                {
                                    cart.items.map(item => (
                                        <div key={item.productId} className="dsc-cart-item-container dsc-line-button">
                                            <div className="dsc-cart-item-left">
                                                <img src={item.imgUrl} alt={item.name} />
                                                <div className="dsc-cart-item-description">
                                                    <h3>{item.name} </h3>
                                                    <div className="dsc-cart-item-quantity-container">
                                                        <div onClick={()=>handleDecreaseItem(item.productId)} className="dsc-cart-item-quantity-btn"> - </div>
                                                        <p> {item.quantity} </p>
                                                        <div onClick={()=>handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn"> + </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dsc-cart-item-right">
                                                R$ {item.subTotal.toFixed(2)}
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="dsc-cart-total-container">
                                    <h3> R$ {cart.total.toFixed(2)} </h3>
                                </div>
                            </div>
                        )
                }

                <div className="gkc-btn-container" >
                    <div className="gkc-btn gkc-btn-blue">
                        Finalizar Pedido
                    </div>
                    <Link to="/catalog">
                        <div className="gkc-btn gkc-btn-white">
                            Continuar Comprando
                        </div>
                    </Link>
                    <div onClick={handleCleaClick} className="gkc-btn gkc-btn-white">
                        Limpar Carrinho
                    </div>

                </div>

            </section>
        </main>
    );
}