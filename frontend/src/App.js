import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Register from "./Pages/Register";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>HOME PAGE</div> },
    {
      path: "/login",
      element: (
        <div>
          <h1>Hello SARROUR</h1>
        </div>
      ),
    },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
