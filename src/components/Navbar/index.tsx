// Packages
import { NavLink } from "react-router-dom";

// Components
import { ShoppingCart } from "..";

// Hooks
import useStateContext from "@hooks/useStateContext";

// Icons
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

// Models
import { NavRoute } from "@models/routes";

// Utils
import { navRoutes } from "@utils/routes";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const {
    state: { cart, shopping },
    toggleShopping,
  } = useStateContext();
  return (
    <nav className='flex justify-between items-center fixed top-0 w-full py-5 px-8 z-10 text-sm font-light bg-white '>
      {navRoutes.map((array: NavRoute[], index: number) => (
        <ul key={index} className='flex items-center gap-3'>
          {array.map((route: NavRoute, index: number) => (
            <li key={index} className={route.className}>
              <NavLink
                to={route.to}
                className={({ isActive }) =>
                  isActive && index !== 0 ? activeStyle : undefined
                }
              >
                {route.title}
              </NavLink>
            </li>
          ))}
          {index === 1 && (
            <li className='cursor-pointer' onClick={toggleShopping}>
              <div className='flex '>
                <ShoppingBagIcon className='h-5 w-5' />
                <span className='ml-2'>{cart.length}</span>
              </div>
            </li>
          )}
        </ul>
      ))}
      {shopping && cart.length > 0 && <ShoppingCart />}
    </nav>
  );
};

export default Navbar;
