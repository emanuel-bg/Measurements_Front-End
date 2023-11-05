import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";
export default function NavBar() {
   return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand>
                     <Link to="/" className="navbar-brand">
                        <button className="btn btn-lg">Home</button>
                     </Link>
                     </Navbar.Brand>
               <Nav className="me-auto">
                  
                  <Nav.Link>
                     <Link to="/about">
                        <button className="btn">About</button>
                     </Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/Profile">
                        <button className="btn">Profile</button>
                     </Link>
                  </Nav.Link>
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
