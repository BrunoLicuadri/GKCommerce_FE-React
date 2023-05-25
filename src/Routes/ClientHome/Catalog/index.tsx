import './styles.css';

import SearchBar from '../../../Components/SearchBar/inidex';
import CatalogCard from '../../../Components/CatalogCard';
import ButtonNextPage from '../../../Components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';



export default function Catalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        productService.findAll().then(response => {
                setProducts(response.data.content);
            });
    }, []);

    return (
        <main>
            <section id="catalog-section" className="gkc-container">

                <SearchBar />

                <div className="gkc-mb20 gkc-mt20 gkc-catalog-cards">
                    {
                        products.map(product => <CatalogCard key={product.id} product={product} />)
                    }

                </div>

                <ButtonNextPage />

            </section>
        </main>
    );
}
