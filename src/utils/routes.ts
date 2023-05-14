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
      to: "/clothes",
      title: "Clothes",
    },
    {
      to: "/electronics",
      title: "Electronics",
    },
    {
      to: "/furnitures",
      title: "Furnitures",
    },
    {
      to: "/toys",
      title: "Toys",
    },
    {
      to: "/others",
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
    {
      to: "/loquesea",
      cart: true,
    },
  ],
];

export { navRoutes };
