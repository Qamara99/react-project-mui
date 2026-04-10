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
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import ProfileInfo from "./pages/Profile/ProfileInfo";
import ProfileOrder from "./pages/Profile/ProfileOrder";
import ForgetPasswordPage from "./pages/ForgetPassword/ForgetPasswordPage";
import VerifyCode from "./pages/ForgetPassword/VerifyCode";
import ResetPassword from "./pages/ForgetPassword/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/home", element: <Home /> },
            {
                path: "/cart", element:
                    <Protectedrouter><Cart /> </Protectedrouter>
            },
            {
                path: "/checkout", element:
                    <Protectedrouter><Checkout /> </Protectedrouter>
            },
            { path: "/categories", element: <CategoriesPage /> },
            { path: "/login", element: <Login /> },
            { path: "/forget-password", element: <ForgetPasswordPage /> },
            { path: "/verify-code", element: <VerifyCode /> },
            { path: "/reset-password", element: <ResetPassword /> },
            {
                path: "/profile", element: <Protectedrouter><Profile /> </Protectedrouter>,
                children:
                    [
                        {
                            index: true,
                            element: <ProfileInfo />
                        },
                        {
                            path: "info",
                            element: <ProfileInfo />
                        },
                        {
      path: "change-email",
      element: <changeEmail />
    },
                        {
                            path: "orders",
                            element: <ProfileOrder />
                        }
                    ]
            },
            { path: "/register", element: <Register /> },
            { path: "/product/:id", element: <ProductDetails /> },

        ],
    },
]);

export default router;