import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/web-logo.png";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <span
        onClick={() => setShowNav(true)}
        class="material-icons nav_open_btn"
      >
        menu
      </span>
      <nav className={`${showNav && "active"}`}>
        <span
          onClick={() => setShowNav(false)}
          class="material-icons nav_close_btn"
        >
          close
        </span>

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
