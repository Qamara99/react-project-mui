import Login from "./Auth/Login";
import Register from "./Auth/Register";
import MainLayout from "./Layouts/MainLayout";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,

} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/cart", element: <Cart /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },

        ],
    },
]);

export default router;