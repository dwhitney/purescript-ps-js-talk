import React from "react";

const Nav = props => (
  <nav>
    <h1>Chart-o-Matic</h1>
    <button onClick={() => props.addChart()} />
  </nav>
);

export default Nav;
