import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/web-logo.png";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <div className="nav_link_list">
          <Link to="/">Lich chieu</Link>
          <Link to="/">Lich chieu</Link>
          <Link to="/">Lich chieu</Link>
          <Link to="/">Lich chieu</Link>
        </div>
        <div className="nav_link_action">
          <Link to="/login">Dang nhap</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
