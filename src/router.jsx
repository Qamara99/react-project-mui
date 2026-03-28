import Login from "./Auth/Login";
import Register from "./Auth/Register";
import MainLayout from "./Layouts/MainLayout";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,

} from "react-router-dom";
import ProductDetails from "./pages/Products/ProductDetails";
import CategoriesPage from "./pages/categories/CategoriesPage";
import Protectedrouter from "./Protectedrouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/cart", element:
                <Protectedrouter><Cart /> </Protectedrouter> },
            { path: "/categories", element: <CategoriesPage /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/product/:id", element: <ProductDetails /> },

        ],
    },
]);

export default router;