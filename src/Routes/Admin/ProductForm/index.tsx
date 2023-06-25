import { Link, useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import FormInput from '../../../Components/FormInput';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';

export default function ProductForm() {

    const params = useParams();

    const isEditing = params.productId !== "create";

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number",
            placeholder: "Preço",
            validation: function (value: any) {
                return Number(value) > 0;
            },
            message: "Favor inserir um valor positivo."
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        }
    });

    useEffect(() => {
        if (isEditing) {
            productService.findById(Number(params.productId))
                .then(response => {
                    const newformData = (forms.updateAll(formData, response.data));
                    setFormData(newformData);
                })
        }
    }, []);

    function handleInputChange(event: any) {
        const result = forms.updateAndValidate(formData, event.target.name, event.target.value);
        setFormData(result);
    }

    function handleTurnDirty(name: string){
        setFormData(forms.dirtyAndValidate(formData, name));
    }


    return (
        <main>
            <section id="product-form-section" className="gkc-container">
                <div className="gkc-product-form-container">
                    <form className="gkc-card gkc-form">
                        <h2>Dados do produto</h2>
                        <div className="gkc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.name}
                                    className="gkc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.price}
                                    className="gkc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.imgUrl}
                                    className="gkc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="gkc-product-form-buttons">
                            <Link to="/admin/products">
                                <button type="reset" className="gkc-btn gkc-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="gkc-btn gkc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}