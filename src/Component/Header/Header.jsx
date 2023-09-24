import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 shadow-md px-3">
        <Logo></Logo>
        <ul className="flex justify-between gap-7">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold text-green-600" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold text-green-600" : ""
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold text-green-600" : ""
            }
          >
            Login
          </NavLink>
            
        </ul>
      </nav>
    </div>
  );
};

export default Header;
