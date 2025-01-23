import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Home } from "../Pages/Home";
import Page404 from "../Pages/Page404";
const router = createBrowserRouter([
  { path: "/", element: <div>HOME PAGE</div> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <Page404 /> },
]);
export default router;
