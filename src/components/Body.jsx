import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRouting from "./Protectedrouting";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedRouting>
          <Browse />
        </ProtectedRouting>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
