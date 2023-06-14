import './styles.css';
import { useEffect, useState } from 'react';
import { OrderDTO } from '../../../models/order';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as orderService from '../../../services/order-service';


export default function Confirmation() {

    const [order, setOrder] = useState<OrderDTO>();

    const params = useParams();

    useEffect(() => {
        orderService.findByIdRequest(Number(params.orderId))
        .then(response => {
            setOrder(response.data);
        })
    }, []);

    return (
        <main>
            <section id="confirmation-section" className="gkc-container">
                <div className="gkc-card gkc-mb20">
                    {
                        order?.items.map(item => (
                            <div key={item.productId} className="gkc-cart-item-container gkc-line-bottom">
                                <div className="gkc-cart-item-left">
                                    <img src={item.imgUrl} alt={item.name} />
                                    <div className="gkc-cart-item-description">
                                        <h3>{item.name} </h3>
                                        <div className="gkc-cart-item-quantity-container">
                                            <p> {item.quantity} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gkc-cart-item-right">
                                    R$ {item.subTotal}
                                </div>
                            </div>
                        ))
                    }

                    <div className="gkc-cart-total-container">
                        <h3> R$ {order?.total.toFixed(2)} </h3>
                    </div>
                </div>

                <div className="gkc-confirmation-message gkc-mb20">
                    Pedido realizado! Número {order?.id}
                </div>

                <div className="gkc-btn-container">
                    <Link to="/">
                        <div className="gkc-btn gkc-btn-white">
                            Início
                        </div>
                    </Link>
                </div>

            </section>

        </main>

    );
}