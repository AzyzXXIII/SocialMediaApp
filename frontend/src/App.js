import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
