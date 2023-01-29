import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar mb-8">
      <div className="container mx-auto px-4 py-3">
          <div className="navbar__section flex justify-between items-center">
                <div className="navbar_logo text-2xl">
                    <Link to='/'>rContact</Link>
                </div>
                <div className="navbar_register">
                    <Link to="/login">Log In</Link>
                    <Link to="/signup" className="ml-4">Sign Up</Link>
                </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
