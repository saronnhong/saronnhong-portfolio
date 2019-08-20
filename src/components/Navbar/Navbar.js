import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";

function Navbar(props) {
    return (
        <div className="navTop">
            <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-sm" id="nav1">
                <Link smooth to="/react-portfolio/#home">
                    <div className="navbar-brand" ><i className="far fa-address-card"></i> Saron Nhong</div>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link smooth to="/react-portfolio/#aboutMe">
                                <div className="navMenu" id="navAbout" data-toggle="collapse" data-target=".navbar-collapse.show">About</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="/react-portfolio/portfolio">
                                <div className="navMenu" href="#portSec" id="navPort" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</div>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="/react-portfolio/#contact">
                                <div className="navMenu" id="navContact" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>



    );
}

export default Navbar;
