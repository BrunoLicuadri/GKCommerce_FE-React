import './styles.css';

import HeaderClient from '../../Components/HeaderClient';
import SearchBar from '../../Components/SearchBar/inidex';
import CatalogCard from '../../Components/CatalogCard';
import ButtonNextPage from '../../Components/ButtonNextPage';
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


export default function Catalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="gkc-container">

                    <SearchBar />

                    <div className="gkc-mb20 gkc-mt20 gkc-catalog-cards">

                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>
                        <CatalogCard product={product}/>

                    </div>

                    <ButtonNextPage />

                </section>
            </main>
        </>
    );
}
