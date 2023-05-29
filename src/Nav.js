import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav({ dogNames }) {
  return (
    <nav className="Nav">
      {dogNames.map(d => <Link key={d} to={`/dogs/${d}`}>
        {d}
      </Link>)}
    </nav>
  );
}

export default Nav;