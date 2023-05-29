import './styles.css';
import cartIcon from '../../assets/Images/cart.svg';

export default function () {

    return (
        <>
            <img src={cartIcon} alt="Carrinho de Compras" />
            <div className="gkc-cart-count">22</div>
        </>

    )
}
