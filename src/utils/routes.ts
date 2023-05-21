// Models
import { NavRoute } from "@models/routes";

const navRoutes: Array<Array<NavRoute>> = [
  [
    {
      to: "/",
      title: "Shopi",
      className: "font-semibold text-lg",
    },
    {
      to: "/",
      title: "All",
    },
    {
      to: "/1",
      title: "Clothes",
    },
    {
      to: "/2",
      title: "Electronics",
    },
    {
      to: "/3",
      title: "Furnitures",
    },
    {
      to: "/4",
      title: "Toys",
    },
    {
      to: "/5",
      title: "Others",
    },
  ],
  [
    {
      to: "/my-account",
      title: "brayhan@gmail.com",
      className: "text-black/60",
    },
    {
      to: "/my-orders",
      title: "My Orders",
    },
    {
      to: "/my-account",
      title: "My Account",
    },
    {
      to: "/sign-in",
      title: "Sign In",
    },
  ],
];

export { navRoutes };
