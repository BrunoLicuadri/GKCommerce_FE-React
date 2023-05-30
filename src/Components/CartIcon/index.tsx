import './styles.css';
import cartIcon from '../../assets/Images/cart.svg';
import { useContext } from 'react';
import { ContextCartCount } from '../../utils/context-cart';

export default function () {

    const {contextCartCount} = useContext(ContextCartCount);

    return (
        <>
            <img src={cartIcon} alt="Carrinho de Compras" />
            {
                contextCartCount>0 &&
                <div className="gkc-cart-count">{contextCartCount}</div>
            }
        </>

    )
}
