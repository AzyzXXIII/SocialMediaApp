import { RouterProvider } from "react-router-dom";
import React from "react";
import router from "./Routes/routes";
import "./Style/App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
