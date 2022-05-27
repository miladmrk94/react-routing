import React from "react";
import { NavLink, useParams } from "react-router-dom";
const Navigation = () => {
  const params = useParams();
  const allLinks = [
    { to: "/", name: "Home", exact: true },
    { to: "/New-Comment", name: "NewComment" },
  ];

  return (
    <nav>
      <ul>
        {allLinks.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navStyle) =>
                  navStyle.isActive ? "activeLink" : ""
                }
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
