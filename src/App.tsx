
import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './Routes/ClientHome/Catalog';
import ClientHome from './Routes/ClientHome';
import ProductDetails from './Routes/ClientHome/ProductDetails';
import Cart from './Routes/ClientHome/Cart';
import { useEffect, useState } from 'react';
import { ContextCartCount } from './utils/context-cart';
import Login from './Routes/ClientHome/Login';
import AdminHome from './Routes/Admin/AdminHome';
import Admin from './Routes/Admin';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import PrivateRoute from './Components/PrivateRoute';
import { AccessTokenPayloadDTO } from './models/auth';
import { ContextToken } from './utils/context-token';
import * as authService from './services/auth-services';
import * as cartService from './services/cart-services';

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
            </Route>
            <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>} >
              <Route index element={<AdminHome />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>

  )
}

export default App
