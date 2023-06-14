
import Catalog from './Routes/ClientHome/Catalog';
import ClientHome from './Routes/ClientHome';
import ProductDetails from './Routes/ClientHome/ProductDetails';
import Cart from './Routes/ClientHome/Cart';
import Login from './Routes/ClientHome/Login';
import AdminHome from './Routes/Admin/AdminHome';
import Admin from './Routes/Admin';
import PrivateRoute from './Components/PrivateRoute';
import { Navigate, Route, Routes } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import { AccessTokenPayloadDTO } from './models/auth';
import { ContextToken } from './utils/context-token';
import { useEffect, useState } from 'react';
import { ContextCartCount } from './utils/context-cart';
import * as authService from './services/auth-services';
import * as cartService from './services/cart-services';
import Confirmation from './Routes/ClientHome/Confirmation';
import ProductListing from './Routes/Admin/ProductListing';
import ProductForm from './Routes/Admin/ProductForm';

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);

    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <ContextCartCount.Provider value={{ contextCartCount, setContextCartCount }}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<ClientHome />} >
              <Route index element={<Catalog />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product-details/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="confirmation/:orderId" element={<PrivateRoute><Confirmation/></PrivateRoute>} />n 
            </Route>
            <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>} >
              <Route index element={<Navigate to="/admin/home"/>} />
              <Route path="home" element={<AdminHome />} />
              <Route path="products" element={<ProductListing />} />
              <Route path="products/:productId" element={<ProductForm />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>

  )
}

export default App
