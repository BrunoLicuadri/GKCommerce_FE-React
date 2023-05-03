
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './Routes/ClientHome/Catalog';
import ClientHome from './Routes/ClientHome';
import ProductDetails from './Routes/ClientHome/ProductDetails';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome/>} >
          <Route index element={<Catalog/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/product-details" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
