import { createBrowserRouter } from "react-router-dom";
import App from "App";
import Home from "pages/Home";
import Cart from "pages/Cart";
import Products from "components/Products";
import ProductDetail from "pages/ProductDetail";
import NewProduct from "pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error page</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product", element: <Products /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/newProduct", element: <NewProduct /> },
    ],
  },
]);

export default router;
