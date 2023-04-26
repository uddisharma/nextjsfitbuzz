import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
        <a href="#">Home</a>
        <ul style={activeLi("home")}>
          <Home />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">pages</a>
        <ul style={activeLi("pages")}>
          <PagesMobile />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("pages")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">portfolio</a>
        <ul style={activeLi("portfolio")}>
          <Portfolio />
        </ul>
        <div
          className="dropdown-btn"
          onClick={() => activeMenuSet("portfolio")}
        >
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul style={activeLi("blog")}>
          <Blog />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("blog")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">shop</a>
        <ul style={activeLi("shop")}>
          <Shop />
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("shop")}>
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <Contact />
    </ul>
  );
};
export default MobileMenu;
