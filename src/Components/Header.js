import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = ({ location: { pathname } }) => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/company">Company Introduction</Link>
      </li>
    </ul>
  </header>
);

export default withRouter(Header);
