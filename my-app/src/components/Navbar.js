import React from "react";
import PropTypes from "prop-types";

const DarkModeToggle = ({ mode, onToggle }) => {
  return (
    <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
      <input
        className="form-check-input"
        onClick={onToggle}
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        aria-label="Toggle dark mode"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
      </label>
    </div>
  );
};

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-brand btn btn-link" onClick={() => props.onPageChange("home")}>
          {props.title}
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active btn btn-link" aria-current="page" onClick={() => props.onPageChange("home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => props.onPageChange("about")}>
                {props.aboutText}
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <DarkModeToggle mode={props.mode} onToggle={props.toggleMode} />
          </form>
        </div>
      </div>
    </nav >
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  onPageChange: PropTypes.func.isRequired,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About",
};
