import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Test from "./pages/Test"
import Root from "./components/Root";
import Admin from "./components/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Products /> },
    ],
  },
  {
    path:'/admin',
    element: <Admin/>,
    children: [
      {
        path: '/admin/test',
        element: <Test/>
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
