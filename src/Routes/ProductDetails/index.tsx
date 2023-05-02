import './styles.css';

import ButtonInverse from "../../Components/ButtonInverse";
import ButtonPrimary from "../../Components/ButtonPrimary";
import HeaderClient from "../../Components/HeaderClient";
import ProductDetailsCard from "../../Components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "Smart Tv",
  description: "Esta Tv é Phoda.",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Importados"
    }
  ]
}

export default function ProductDetails() {
  return (

    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="gkc-container">

          <ProductDetailsCard product={product} />

          <div className="gkc-btn-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}