import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./Auth/Logout";

export default function NavBar() {
   return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Link to="/" className="navbar-brand">
                  <button className="btn btn-lg">Home</button>
               </Link>

               <Nav className="me-auto">
                  <Link to="/about">
                     <button className="btn">About</button>
                  </Link>

                  <Link to="/Profile">
                     <button className="btn">Profile</button>
                  </Link>
               </Nav>
               <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                     <Logout />
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
}
