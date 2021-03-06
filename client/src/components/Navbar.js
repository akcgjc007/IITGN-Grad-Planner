import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="bg-dark px-2" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/" style={{ color: "white" }}>
        <strong>Planner</strong>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "white" }} href="/login">
            Login
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/gen-share-link">
            Share Plan
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/devs">
            Developers
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Plan name"
          className="mr-4 my-auto"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
