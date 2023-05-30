import './styles.css';

export default function Login() {

    return (
        <main>
            <section id="login-section" className="gkc-container">
                <div className="gkc-login-form-container">
                    <form className="gkc-card gkc-form">
                        <h2>Login</h2>
                        <div className="gkc-form-controls-container">
                            <div>
                                <input className="gkc-form-control" type="text" placeholder="Email" />
                                    <div className="gkc-form-error"></div>
                            </div>
                            <div>
                                <input className="gkc-form-control" type="password" placeholder="Senha" />
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