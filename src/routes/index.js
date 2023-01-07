import { createBrowserRouter } from "react-router-dom";
import App from "App";
import Product from "components/Product";
import ProductDetail from "components/ProductDetail";
import Cart from "components/Cart";
import NewProduct from "components/NewProduct";
import ProtectedRoute from "pages/ProtectedRoute";
import Home from "components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>에러 페이지</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
      {
        path: "/product/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: "/product/:id", element: <ProductDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
