import { Login } from "@/presentation/pages";
import React, { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

type Props = {
  MakeLogin: React.FC;
};

const Router: React.FC<Props> = ({ MakeLogin }: Props) => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <MakeLogin />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
