import React from "react";
import Login from "./Login";
import Sign_in from "./Sign_in";
 

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    // errorElement: <p />,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Sign_in",
    element: <Sign_in/>,
  },
]);


function App() {
  return (
      <div className=" App">
 
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
