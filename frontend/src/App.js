import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Register from "./Pages/Register";
import "./Style/App.css";
import { Login } from "./Pages/Login";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>HOME PAGE</div> },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
