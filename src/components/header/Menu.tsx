import { useContext } from "react";

import { CommerceContext } from "../../context/CommerceContext";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const { navItems, showMenu, handleMenu } = useContext(CommerceContext);

  return (
    <>
      <div className="absolute z-20 w-6 h-6  md:hidden">
        <div
          className={` ${showMenu ? "hidden" : "block"}`}
          onClick={() => handleMenu("open")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div
          className={`md:hidden ${!showMenu ? "hidden" : "block"}`}
          onClick={() => handleMenu("close")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <ul
        className={` navList ${
          showMenu || window.innerWidth >= 768 ? "visible" : "hidden"
        } `}
      >
        {navItems.map((item: string, i: number) => {
          return (
            <li className="menu-item " key={item}>
              {i === 0 ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-customOrgange" : ""
                  }
                  onClick={() => handleMenu("close")}
                  to="/"
                >
                  {item}
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-customOrgange" : ""
                  }
                  onClick={() => handleMenu("close")}
                  to={`/${item}`}
                >
                  {item}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
