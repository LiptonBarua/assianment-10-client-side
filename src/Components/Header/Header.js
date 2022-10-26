import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {FaReadme} from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className='d-flex align-items-center'>
          <h2 className='text-white '><FaReadme/></h2>
          <h2 className='text-white ml-3'>Computer Learning</h2>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='mx-6 text-xl text-decoration-none text-orange-500' to='/'>Home</Link>
              <Link className='mx-6 text-xl text-decoration-none text-orange-500' to='/courses'>Courses</Link>
              <Link className='mx-6 text-xl text-decoration-none text-orange-500' to='/faq'>FAQ</Link>
              <Link className='mx-6 text-xl text-decoration-none text-orange-500' to='/blog'>Blog</Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;