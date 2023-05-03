import './styles.css';

import SearchBar from '../../../Components/SearchBar/inidex';
import CatalogCard from '../../../Components/CatalogCard';
import ButtonNextPage from '../../../Components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';



export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="gkc-container">

                <SearchBar />

                <div className="gkc-mb20 gkc-mt20 gkc-catalog-cards">
                    {
                        productService.findAll()
                            .map(product => <CatalogCard key={product.id} product={product} />
                        )
                    }

                </div>

                <ButtonNextPage />

            </section>
        </main>
    );
}
