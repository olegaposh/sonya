import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";
import "./navbar.css"

const navbar = () => (
  
  <BrowserRouter>
  

    <MDBNav id="bar" className="justify-content-center">
      <MDBNavLink active to="#!">Gallery</MDBNavLink>
      <MDBNavLink to="#!">Workshops</MDBNavLink>
      <MDBNavLink to="#!">Retreats</MDBNavLink>
      <MDBNavLink to="#!">Contacts</MDBNavLink>
      <MDBNavLink to="#!">Blog</MDBNavLink>
      <MDBNavLink to="#!">Poetry</MDBNavLink>
      <MDBNavLink to="#!">Work With Me</MDBNavLink>
    </MDBNav>


  </BrowserRouter>

);

export default navbar;