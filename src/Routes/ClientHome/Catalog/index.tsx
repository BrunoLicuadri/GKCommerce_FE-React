import './styles.css';
import SearchBar from '../../../Components/SearchBar/inidex';
import CatalogCard from '../../../Components/CatalogCard';
import ButtonNextPage from '../../../Components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';

type QueryParams = {
    page: number,
    name: string
}

export default function Catalog() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [isLastPage, setIsLastPage] = useState(false);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(products.concat(nextPage));
                setIsLastPage(response.data.last);
            });
    }, [queryParams]);

    function handleSearch(searchText: string) {
        setProducts([]);
        setQueryParams({ ...queryParams, page: 0, name: searchText });
    }

    function handleNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
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

                {
                    !isLastPage &&
                    <div>
                        <ButtonNextPage onNextPage={handleNextPageClick}/>
                    </div>
                }


            </section>
        </main>
    );
}
