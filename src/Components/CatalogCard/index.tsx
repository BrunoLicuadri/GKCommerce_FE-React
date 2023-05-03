import './styles.css';
import { ProductDTO } from '../../models/product';
import { Link } from 'react-router-dom';

type Props = {
    product: ProductDTO;
}

export default function CatalogCard({ product }: Props) {
    return (
        <Link to={`/product-details/${product.id}`} >
            <div className="gkc-card">

                <div className="gkc-catalog-card-top gkc-line-bottom">
                    <img src={product.imgUrl} alt={product.name} />
                </div>

                <div className="gkc-catalog-card-bottom">
                    <h3>{product.price}</h3>
                    <h4>{product.name}</h4>
                </div>
            </div>
        </Link>
    );
}