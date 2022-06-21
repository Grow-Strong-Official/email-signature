import React from "react";

function Navbar() {
  const style = {
    backgroundColor: "#5B5EE1",
  };

  return (
    <>
      <nav className="navbar navbar-dark mb-3" style={style}>
        <div className="container">
          <span className="navbar-brand light">
            Grow Strong Email Signature
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
