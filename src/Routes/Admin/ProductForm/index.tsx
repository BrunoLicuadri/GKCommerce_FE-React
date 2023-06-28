import { Link, useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import FormInput from '../../../Components/FormInput';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';
import FormTextArea from '../../../Components/FormTextArea';
import { CategoryDTO } from '../../../models/category';
import * as categoryService from '../../../services/category-service';
import FormSelect from '../../../Components/FormSelect';
import { selectStyles } from '../../../utils/select';


export default function ProductForm() {

    const params = useParams();

    const isEditing = params.productId !== "create";

    const[categories, setCategories] = useState<CategoryDTO[]>();

    useEffect( ()=>{
        categoryService.findAllRequest()
            .then( response=> {
                setCategories(response.data);
            })
    }, []);

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                return /^.{3,80}$/.test(value);
            },
            message: "Favor preencher um nome de 3 a 80 caracteres."
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
        },
        categories: {
            value:[],
            id: "categories",
            name: "categories",
            placeholder: "Categoria",
            validation: function (value: CategoryDTO[]) {
                return value.length > 0;
            },
            message: "Selecionar pelo menos 1 categoria."
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "descrição",
            validation: function (value: string) {
                return /^.{10,}$/.test(value);
            },
            message: "Descrição deve conter mínimo 10 caracteres."
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

    function handleTurnDirty(name: string) {
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
                            <div>
                                <FormSelect
                                {...formData.categories}
                                styles={selectStyles}
                                className="gkc-form-control gkc-form-select-container"
                                options={categories} 
                                onChange={(obj: any) => {
                                const newFormData = forms.updateAndValidate(formData, "categories", obj);
                                setFormData(newFormData);
                                }}
                                isMulti
                                getOptionLabel={(obj: any)=> obj.name}
                                getOptionValue={(obj: any)=> String(obj.id)}
                                onTurnDirty={handleTurnDirty}
                                />
                                <div className="gkc-form-error">{formData.categories.message}</div>
                            </div>
                            <div>
                                <FormTextArea
                                    {...formData.description}
                                    className="gkc-form-control gkc-textarea"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error">{formData.description.message}</div>
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