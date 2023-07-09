import React from "react";
import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const Toolbar = () => (
    <header className="Toolbar">
        <div className="Toolbar-logo">
            <NavLink className="Toolbar-navLink" to="/">
                News
            </NavLink>
        </div>
    </header>
);

export default Toolbar;