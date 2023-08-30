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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
