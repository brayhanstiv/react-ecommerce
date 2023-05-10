// Packages
import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  children: string | JSX.Element | JSX.Element[];
  activeStyle: string;
};

const NavItem = ({ to, children, activeStyle }: NavItemProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
