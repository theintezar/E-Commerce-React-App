import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Home from './Pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/> }>
      <Route index element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='details' element={<ProductDetails />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
