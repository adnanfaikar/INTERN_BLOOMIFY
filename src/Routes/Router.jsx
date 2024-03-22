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
import BookingPage from "../Pages/BookingPage";
import ArticlePage from "../Pages/ArticlePage";
import Article2 from "../Pages/Article2";
import SurveyResult from "../Pages/SurveyResult";
import PaymentFailed from "../Pages/PaymentFailed";
import WaitingPayment from "../Pages/WaitingPayment";
import ProfilePage from "../Pages/ProfilePage";
import ReminderPage from "../Pages/ReminderPage";
import PersonalizePage from "../Pages/PersonalizePage";

import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  ,
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/Article",
    element: <ArticlePage />,
  },
  {
    path: "/Article2",
    element: <Article2 />,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Profile",
        element: <ProfilePage />,
      },
      {
        path: "/Reminder",
        element: <ReminderPage />,
      },
      {
        path: "/Personalize",
        element: <PersonalizePage />,
      },
      {
        path: "/Booking",
        element: <BookingPage />,
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
        path: "/SurveyResult",
        element: <SurveyResult />,
      },
      {
        path: "/WaitingPayment",
        element: <WaitingPayment />,
      },
      {
        path: "/PaymentSucced",
        element: <PaymentSucced />,
      },
      {
        path: "/PaymentFailed",
        element: <PaymentFailed />,
      },
      {
        path: "/reminder",
        element: <ReminderPage />,
      },
      {
        path: "/BeautyNavigator",
        element: <BeautyNavigator />,
      },
    ],
  },
]);

export default router;
