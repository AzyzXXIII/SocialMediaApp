import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Register from "./Pages/Register";
import "./Style/App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>HOME PAGE</div> },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
