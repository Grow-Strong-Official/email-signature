import React from "react";

function Navbar() {
  const style = {
    backgroundColor: "#5B5EE1",
  };

  return (
    <>
      <nav className="navbar navbar-dark mb-3" style={style}>
        <div className="container">
          <div className="d-flex align-items-center">
            <img
              src="https://storage.googleapis.com/msgsndr/KHne5YzKPJwiAWUNMRtG/media/6216804a5e612c424669cfeb.png"
              className="d-inline-block align-text-top"
              // width="30"
              height="45"
              alt=""
            />
            <span className="navbar-brand light">&nbsp;Email Signature</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
