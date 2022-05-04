import React from "react";
import Logo from "../logo.png";
import SearchBar from "./SearchBar.jsx";
import  "./Nav.css";
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-black bg-black">
    <Link><img className="img-navbar" src={Logo} alt="logo" width={40} /></Link>
  {/* <Link class="navbar-brand" to="/">Weather App</Link> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link class="nav-item nav-link active" to="/">Weather App<span class="sr-only"></span></Link>
    <Link class="nav-item nav-link" active to="/about">About</Link>
    <Link class="nav-item nav-link" href="#"></Link>
    <Link class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></Link>
    </div>
    <div className="bar-busqueda">
    <SearchBar onSearch={onSearch} />
    </div>
  </div>
</nav>
  );
}


