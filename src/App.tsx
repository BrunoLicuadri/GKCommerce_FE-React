import './App.css';

import cartIcon from './assets/Images/cart.svg';
import computerImg from './assets/Images/computer.png';

function App() {

  return (
    <>
      <header className="gkc-header-client">
      <nav className="gkc-container">
        <h1>GKCommerce</h1>
        <div className="gkc-navbar-right">
          <div className="gkc-menu-items-container">
            <div className="gkc-menu-items">
              <img src={cartIcon} alt="Carrinho de Compras" />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
        
      </nav>
    </header>
    <main>
      <section id="product-details-section" className="gkc-container">
        <div className="gkc-card gkc-mb20">
          <div className="gkc-product-detail-top gkc-line-bottom">
            <img src={computerImg} alt="Computa" />
          </div>
          <div className="gkc-product-detail-bottom">
            <h3>R$ 5000,00</h3>
            <h4>Computador Gamer XT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="gkc-category-container">
            <div className="gkc-category">Eletrônicos</div>
            <div className="gkc-category">Computadores</div>
          </div>
        </div>

        <div className="gkc-btn-container">
          <div className="gkc-btn gkc-btn-blue">Comprar</div>
          <div className="gkc-btn gkc-btn-white">Início</div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
