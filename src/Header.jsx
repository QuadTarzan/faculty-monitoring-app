import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isAdmin = location.pathname === "/";

  return (
    <div className="nav-header">
      <div className="logo">📘 Faculty Monitor</div>
      <div className="nav-links">
        <Link to="/" className={isAdmin ? "active-tab" : ""}>
          Admin
        </Link>
        <Link to="/view" className={!isAdmin ? "active-tab" : ""}>
          View Only
        </Link>
      </div>
    </div>
  );
};

export default Header;
