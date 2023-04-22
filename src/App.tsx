import './App.css';
import ButtonInverse from './Components/ButtonInverse';
import ButtonPrimary from './Components/ButtonPrimary';
import HeaderClient from './Components/HeaderClient';
import ProductDetailsCard from './Components/ProductDetailsCard';

function App() {

  return (
    <>
      <HeaderClient/>
    <main>
      <section id="product-details-section" className="gkc-container">

        <ProductDetailsCard/>

        <div className="gkc-btn-container">
          <ButtonPrimary/>
          <ButtonInverse/>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
