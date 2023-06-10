
import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './Routes/ClientHome/Catalog';
import ClientHome from './Routes/ClientHome';
import ProductDetails from './Routes/ClientHome/ProductDetails';
import Cart from './Routes/ClientHome/Cart';
import { useState } from 'react';
import { ContextCartCount } from './utils/context-cart';
import Login from './Routes/ClientHome/Login';
import AdminHome from './Routes/Admin/AdminHome';
import Admin from './Routes/Admin';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import PrivateRoute from './Components/PrivateRoute';

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<ClientHome />} >
            <Route index element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element={ <PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute> } >
            <Route index element={<AdminHome/>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>

  )
}

export default App
