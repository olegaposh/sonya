import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";
import "./navbar.css"

const navbar = () => (
  
  <BrowserRouter>
  

    <MDBNav id="bar" className="justify-content-center">
      <MDBNavLink className="menu" active to="#!">Gallery</MDBNavLink>
      <MDBNavLink className="menu" to="#!">Workshops</MDBNavLink>
      <MDBNavLink className="menu" to="#!">Retreats</MDBNavLink>
      <MDBNavLink className="menu" to="#!">Blog</MDBNavLink>
      <MDBNavLink className="menu" to="#!">Meditations</MDBNavLink>
      <MDBNavLink className="menu" to="#!">Poetry</MDBNavLink>
      <MDBNavLink className="menu" to="#!">Contact Me</MDBNavLink>
    </MDBNav>


  </BrowserRouter>

);

export default navbar;