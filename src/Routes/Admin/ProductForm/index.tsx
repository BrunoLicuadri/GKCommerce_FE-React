import './styles.css';

export default function ProductForm() {

    return (
        <main>
            <section id="product-form-section" className="gkc-container">
                <div className="gkc-product-form-container">
                    <form className="gkc-card gkc-form">
                        <h2>Dados do produto</h2>
                        <div className="gkc-form-controls-container">
                            <div>
                                <input className="gkc-form-control" type="text" placeholder="Nome"/>
                            </div>
                            <div>
                                <input className="gkc-form-control" type="text" placeholder="Preço"/>
                            </div>
                            <div>
                                <input className="gkc-form-control" type="text" placeholder="Imagem"/>
                            </div>
                            <div>
                                <select className="gkc-form-control gkc-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div>
                            <div>
                                <textarea className="gkc-form-control gkc-textarea" placeholder="Descrição"></textarea>
                            </div>
                        </div>

                        <div className="gkc-product-form-buttons">
                            <button type="reset" className="gkc-btn gkc-btn-white">Cancelar</button>
                            <button type="submit" className="gkc-btn gkc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}