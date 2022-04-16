import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Navigation = () => {
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
                activeClassName="activeLink"
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

export default withRouter(Navigation);
