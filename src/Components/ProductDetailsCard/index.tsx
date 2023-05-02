import './styles.css';
import ProductCategory from '../ProductCategory';
import { ProductDTO } from '../../models/product';

type Props = {
  product: ProductDTO;
}

export default function ProductDetailsCard({ product }: Props) {
  return (
    <div className="gkc-card gkc-mb20">
      <div className="gkc-product-detail-top gkc-line-bottom">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="gkc-product-detail-bottom">
        <h3>{product.price}</h3>
        <h4>{product.name}</h4>
        <p>
          {product.description}
        </p>
      </div>

      <div className="gkc-category-container">
        {product.categories.map(
          item => (<ProductCategory key={item.id} name={item.name} />)
          )
        }
      </div>
    </div>
  );
}