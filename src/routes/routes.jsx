import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import About from "../pages/About/About";
import Contract from "../pages/Contract/Contract";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import PrivateRoute from "./Private/PrivateRoute";
import Overview from "../pages/Overview/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contract-us",
        element: <Contract></Contract>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // {
      //   path: "/dashboard",
      //   element: <Home></Home>,
      // },
      {
        path: "/dashboard/addProduct",
        element: <Product></Product>,
      },
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
    ],
  },
]);
