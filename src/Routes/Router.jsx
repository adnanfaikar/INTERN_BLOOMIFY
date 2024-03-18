import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BeautyNavigator from "../Pages/BeautyNavigator";
import PaymentSucced from "../Pages/PaymentSucced";
import Payment from "../Pages/Payment";
import Survey from "../Pages/Survey";
import DetailsPage from "../Pages/DetailsPage";
import ErrorPage from "../Pages/ErrorPage";
import ResultPage from "../Pages/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/BeautyNavigator",
    element: <BeautyNavigator />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/PaymentSucced",
    element: <PaymentSucced />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/Survey",
    element: <Survey />,
  },
  {
    path: "/Details",
    element: <DetailsPage />,
  },
  {
    path: "/Result",
    element: <ResultPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
