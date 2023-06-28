import './styles.css';
import editIcon from '../../../assets/Images/edit.svg';
import deleteIcon from '../../../assets/Images/delete.svg';
import * as productService from '../../../services/product-service';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import SearchBar from '../../../Components/SearchBar/inidex';
import ButtonNextPage from '../../../Components/ButtonNextPage';
import DialogInfo from '../../../Components/DialogInfo';
import DialogConfirmation from '../../../Components/DialogConfirmation';
import ButtonInverse from '../../../Components/ButtonInverse';
import { useNavigate } from 'react-router-dom';

type QueryParams = {
    page: number,
    name: string
}

export default function ProductListing() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [isLastPage, setIsLastPage] = useState(false);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com Sucesso"
    });

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza ?"
    });

    const navigate = useNavigate();

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

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false })
    }

    function handleDialogConfirmationAnswer(answer: boolean, productId: number) {
        console.log("Resposta:", answer);
        if (answer) {
            productService.deleteById(productId)
                .then(() => {
                    setProducts([]);
                    setQueryParams({ ...queryParams, page: 0 });
                })
                .catch(error => {
                    setDialogInfoData({
                        visible: true,
                        message: error.response.data.error
                    })
                })
        }

        setDialogConfirmationData({ ...dialogConfirmationData, visible: false })
    }

    function handleDeleteClick(productId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: productId, visible: true })
    }

    function handleNewProductClick(){
        navigate("/admin/products/create")
    }

    function handleUpdateClick(productId: number){
        navigate(`/admin/products/${productId}`);
    }

    return (
        <main>
            <section id="product-listing-section" className="gkc-container">
                <h2 className="gkc-section-title gkc-mb20">Cadastro de produtos</h2>

                <div className="gkc-btn-container gkc-mb20">
                    <div onClick={handleNewProductClick}>
                        <ButtonInverse text="Novo" />
                    </div>
                </div>

                <SearchBar onSearch={handleSearch} />

                <table className="gkc-table gkc-mb20 gkc-mt20">
                    <thead>
                        <tr>
                            <th className="gkc-tb576">ID</th>
                            <th></th>
                            <th className="gkc-tb768">Preço</th>
                            <th className="gkc-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td className="gkc-tb576">{product.id}</td>
                                    <td><img className="gkc-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                                    <td className="gkc-tb768">R$ {product.price}</td>
                                    <td className="gkc-txt-left">{product.name}</td>
                                    <td><img onClick={() => handleUpdateClick(product.id)} className="gkc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                                    <td><img onClick={() => handleDeleteClick(product.id)} className="gkc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {
                    !isLastPage &&
                    <ButtonNextPage onNextPage={handleNextPageClick} />
                }


            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }

            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                    id={dialogConfirmationData.id}
                />
            }
        </main>
    );
}