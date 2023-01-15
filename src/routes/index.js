import { createBrowserRouter } from "react-router-dom";
import App from "App";
import Home from "pages/Home";
import Cart from "pages/Cart";
import Products from "components/Products";
import ProductDetail from "pages/ProductDetail";
import NewProduct from "pages/NewProduct";
import ProtectedRoute from "pages/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error page</div>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "/product", element: <Products /> },
      { path: "/product/:id", element: <ProductDetail /> },
      {
        path: "/newProduct",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
