import './styles.css';
import { useState } from 'react';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-services';

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Erro no Login", error);
            })
    }

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    return (
        <main>
            <section id="login-section" className="gkc-container">
                <div className="gkc-login-form-container">
                    <form onSubmit={handleSubmit} className="gkc-card gkc-form">
                        <h2>Login</h2>
                        <div className="gkc-form-controls-container">
                            <div>
                                <input
                                    name="username"
                                    value={formData.username}
                                    className="gkc-form-control"
                                    type="text"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                />
                                <div className="gkc-form-error"></div>
                            </div>
                            <div>
                                <input
                                    name="password"
                                    value={formData.password}
                                    className="gkc-form-control"
                                    type="password"
                                    placeholder="Senha"
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