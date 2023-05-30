import './styles.css';

import ButtonInverse from "../../../Components/ButtonInverse";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import ProductDetailsCard from "../../../Components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-services';
import { ContextCartCount } from '../../../utils/context-cart';

export default function ProductDetails() {

  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  const { setContextCartCount } = useContext(ContextCartCount);

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleBuyClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart");
    }
  }


  return (
    <main>
      <section id="product-details-section" className="gkc-container">

        {
          product &&
          <ProductDetailsCard product={product} />
        }

        <div className="gkc-btn-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimary text='Comprar' />
          </div>

          <Link to="/">
            <ButtonInverse text='Início' />
          </Link>

        </div>
      </section>
    </main >

  );
}