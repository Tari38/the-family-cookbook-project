import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";
import FCBLogo from "../images/FCB_logo-horizontal-hires-75.png";

const Header = () => (
  <Navbar id="navbar">
    <NavbarBrand>
      <img src={FCBLogo} alt=""></img>
      <h6 id="header-title">The Family Cookbook Project</h6>
    </NavbarBrand>
  </Navbar>
);

export default Header;
