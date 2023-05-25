import './styles.css';

import ButtonInverse from "../../../Components/ButtonInverse";
import ButtonPrimary from "../../../Components/ButtonPrimary";
import ProductDetailsCard from "../../../Components/ProductDetailsCard";
import { ProductDTO } from '../../../models/product';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProductDetails() {

  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${params.productId}`)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      });
  }, []);




  return (
    <main>
      <section id="product-details-section" className="gkc-container">

        {
          product &&
          <ProductDetailsCard product={product} />
        }

        <div className="gkc-btn-container">
          <ButtonPrimary text='Comprar' />
          <Link to="/">
            <ButtonInverse text='Início' />
          </Link>

        </div>
      </section>
    </main >

  );
}