import React from "react";

const Nav = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      {children}
    </a>
  </nav>
);

export default Nav;
