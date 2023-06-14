import './styles.css';
import editIcon from '../../../assets/Images/edit.svg';
import deleteIcon from '../../../assets/Images/delete.svg';
import computer from '../../../assets/Images/computer.png';

export default function ProductListing() {

    return (
        <main>
            <section id="product-listing-section" className="gkc-container">
                <h2 className="gkc-section-title gkc-mb20">Cadastro de produtos</h2>

                <div className="gkc-btn-page-container gkc-mb20">
                    <div className="gkc-btn gkc-btn-white">Novo</div>
                </div>

                <form className="gkc-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do produto" />
                    <button type="reset">🗙</button>
                </form>

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
                        <tr>
                            <td className="gkc-tb576">341</td>
                            <td><img className="gkc-product-listing-image" src={computer} alt="Computer" /></td>
                            <td className="gkc-tb768">R$ 5000,00</td>
                            <td className="gkc-txt-left">Computador Gamer XT Plus Ultra</td>
                            <td><img className="gkc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="gkc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                        </tr>
                        <tr>
                            <td className="gkc-tb576">341</td>
                            <td><img className="gkc-product-listing-image" src={computer} alt="Computer" /></td>
                            <td className="gkc-tb768">R$ 5000,00</td>
                            <td className="gkc-txt-left">Computador Gamer XT Plus Ultra</td>
                            <td><img className="gkc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="gkc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>                      </tr>
                        <tr>
                            <td className="gkc-tb576">341</td>
                            <td><img className="gkc-product-listing-image" src={computer} alt="Computer" /></td>
                            <td className="gkc-tb768">R$ 5000,00</td>
                            <td className="gkc-txt-left">Computador Gamer XT Plus Ultra</td>
                            <td><img className="gkc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                            <td><img className="gkc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>                     </tr>
                    </tbody>
                </table>

                <div className="gkc-btn-next-page">Carregar mais</div>
            </section>
        </main>
    );
}