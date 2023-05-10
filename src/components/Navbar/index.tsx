// Packages
import { NavLink } from "react-router-dom";

// Models
import { NavRoute } from "@models/routes";

// Utils
import { navRoutes } from "@utils/routes";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className='flex justify-between items-center fixed top-0 w-full py-5 px-8 text-sm font-light'>
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
        </ul>
      ))}
    </nav>
  );
};

export default Navbar;
