import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/Theme/ThemeContextProvider";

export default function Navbar(props) {
  const context = useContext(ThemeContext);
  const { toggleTheme } = context;
  console.log(context)

  return (
    <>
      <div className="toggle-theme form-check form-switch d-flex justify-content-end m-0">
        <input onClick={toggleTheme} className="form-check-input me-2 " type="checkbox" name="switch" id="toggleSwitch" />
        <label className="form-check-label me-3" htmlFor="toggleSwitch">
          Darkmode
        </label>
      </div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid my-1">
          <Link className="navbar-brand" to="/">
            <strong>{props.title}</strong>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title goes here",
};
