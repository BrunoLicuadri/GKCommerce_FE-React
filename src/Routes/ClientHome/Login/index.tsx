import './styles.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import * as authService from '../../../services/auth-services';
import FormInput from '../../../Components/FormInput';

export default function Login() {

    const navigate = useNavigate();

    const { setContextTokenPayload } = useContext(ContextToken);

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest({ username: formData.username.value, password: formData.password.value })
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(error => {
                console.log("Erro no Login", error);
            })
    }

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: { ...formData[name], value: value } });
    }

    return (
        <main>
            <section id="login-section" className="gkc-container">
                <div className="gkc-login-form-container">
                    <form onSubmit={handleSubmit} className="gkc-card gkc-form">
                        <h2>Login</h2>
                        <div className="gkc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.username}
                                    className="gkc-form-control"
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error"></div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.password}
                                    className="gkc-form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="gkc-login-form-buttons gkc-mt20">
                            <button type="submit" className="gkc-btn gkc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    );
}