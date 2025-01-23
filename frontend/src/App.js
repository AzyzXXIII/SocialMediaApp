import { RouterProvider } from "react-router-dom";
import React from "react";
import "./Style/App.css";
import router from "./Routes/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
