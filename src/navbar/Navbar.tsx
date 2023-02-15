import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import "./navbar.css";
const Navbar = () => {
  const { isAuth, email } = useAuth();

  return (
    <>
      <div className="navbar mb-8">
        <div className="container mx-auto px-4 py-3">
          <div className="navbar__section flex justify-between items-center">
            <div className="navbar_logo text-2xl">
              <Link to="/">rContact</Link>
            </div>

            <div className="navbar_register">
              {!isAuth ? (
                <Link to="/signup" className="ml-4">
                  Sign Up
                </Link>
              ) : (
                <h4>{email}</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
