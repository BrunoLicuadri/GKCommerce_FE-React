import './styles.css';

import HeaderClient from '../../Components/HeaderClient';
import SearchBar from '../../Components/SearchBar/inidex';
import CatalogCard from '../../Components/CatalogCard';
import ButtonNextPage from '../../Components/ButtonNextPage';


export default function Catalog() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="gkc-container">

                    <SearchBar />

                    <div className="gkc-mb20 gkc-mt20 gkc-catalog-cards">

                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />
                        <CatalogCard />

                    </div>

                    <ButtonNextPage />

                </section>
            </main>
        </>
    );
}
