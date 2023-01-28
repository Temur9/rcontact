import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar mb-8">
      <div className="container mx-auto px-4 py-3">
          <div className="navbar__section flex justify-between items-center">
                <div className="navbar_logo text-2xl">
                    rContact
                </div>
                <div className="navbar_register">
                    <a href="/#">Log In</a>
                    <a className="ml-4" href="/#">Sign Up</a>
                </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
