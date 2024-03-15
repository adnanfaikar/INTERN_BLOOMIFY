import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BeautyNavigator from "../Pages/BeautyNavigator";
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
]);

export default router;
