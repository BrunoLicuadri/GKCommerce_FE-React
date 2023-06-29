import './styles.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/context-token';
import * as authService from '../../../services/auth-services';
import * as forms from '../../../utils/forms';
import FormInput from '../../../Components/FormInput';

export default function Login() {

    const navigate = useNavigate();

    const { setContextTokenPayload } = useContext(ContextToken);

    const [submitResponseFail, setSubmitResponseFail] = useState(false);

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
        setSubmitResponseFail(false);
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }
        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(() => {
                setSubmitResponseFail(true);
            })
    }

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
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
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error">{formData.username.message}</div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.password}
                                    className="gkc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error">{formData.password.message}</div>
                            </div>
                        </div>

                        {
                            submitResponseFail &&
                            <div className='gkc-form-global-error'>
                                Usuário ou senha inválido.
                            </div>
                        }


                        <div className="gkc-login-form-buttons gkc-mt20">
                            <button type="submit" className="gkc-btn gkc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    );
}