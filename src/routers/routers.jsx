import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Loading from "../components/ui/Loading";
const Hero = lazy(() => import("../components/Hero/Hero"));
const Products = lazy(() => import("../components/Products/Products"));
const Login = lazy(() => import("../pages/auth/Login/Login"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Hero />
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
