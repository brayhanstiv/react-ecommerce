// Pacakages
import { useRoutes } from "react-router-dom";

// Pages
import {
  HomePage,
  MyOrderPage,
  MyOrdersPage,
  MyAccountPage,
  SignInPage,
  NotFoundPage,
} from "@pages/index";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:id",
      element: <HomePage />,
    },
    {
      path: "/my-orders",
      element: <MyOrdersPage />,
    },
    {
      path: "/my-order",
      element: <MyOrderPage />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrderPage />,
    },
    {
      path: "/my-account",
      element: <MyAccountPage />,
    },
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default Routes;
