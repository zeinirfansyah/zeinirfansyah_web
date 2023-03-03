import React from "react";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="/" className="navbar-brand">
            <span>Zein</span> Irfansyah
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggle
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/footer" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
