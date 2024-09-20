import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <>
      <nav className={classes.header}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/product"}
              className={({ isActive }) => {
               return isActive ? classes.active : undefined
              }}
              end
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
