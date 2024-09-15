/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" variant="dark">
      <Container className="navbar">
        <Link passHref href="/">
          <Image src="/madina-logo.png" alt="Restaruant Logo" style={{ height: '90px', width: '120px' }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/staff">
              <Nav.Link className="custom-nav-link">Staff Members</Nav.Link>
            </Link>
            <Link passHref href="/staff/new">
              <Nav.Link className="custom-nav-link">Create Staff</Nav.Link>
            </Link>
            <Button variant="danger" type="button" size="lg" className="custom-nav-button" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
