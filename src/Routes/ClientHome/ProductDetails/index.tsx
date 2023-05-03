import './styles.css';

import ButtonInverse from "../../../Components/ButtonInverse";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import ProductDetailsCard from "../../../Components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import { useParams } from 'react-router-dom';


export default function ProductDetails() {

  const params = useParams();
  const product = productService.findById(Number(params.productId));
  

  return (
    <main>
      <section id="product-details-section" className="gkc-container">
        
        {
        product &&
        <ProductDetailsCard product={product} />
        }

        <div className="gkc-btn-container">
          <ButtonPrimary text='Comprar' />
          <ButtonInverse text='Início' />
        </div>
      </section>
    </main >

  );
}