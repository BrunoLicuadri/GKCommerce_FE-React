import './styles.css';

import SearchBar from '../../../Components/SearchBar/inidex';
import CatalogCard from '../../../Components/CatalogCard';
import ButtonNextPage from '../../../Components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';



export default function Catalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [productName, setProductName] = useState("");

    useEffect(() => {
        productService.findPageRequest(0, productName)
            .then(response => {
                setProducts(response.data.content);
            });
    }, [productName]);

    function handleSearch (searchText:string){
        setProductName(searchText);
    }

    return (
        <main>
            <section id="catalog-section" className="gkc-container">

                <SearchBar onSearch={handleSearch} />

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
