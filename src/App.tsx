/* eslint-disable prettier/prettier */
// import { Counter } from "./features/counter/Counter"?
// import Product from "./features/product-list/ProductList"
import Home from "./pages/Home"



// react router
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import { Login } from "./features/auth/components/Login";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LginPage";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/CheckOutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/productdetails/:id",
    element: <ProductDetailsPage />,
  },
  // In your router configuration


]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
