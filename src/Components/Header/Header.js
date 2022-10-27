import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {FaReadme, FaUser} from 'react-icons/fa';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../Context/AuthProvider';
import Image from 'react-bootstrap/Image'


const Header = () => {
 const [changeColor, setChangeColor] = useState(false);
 const {user, logout}= useContext(AuthContext);

   const handleDarkMode=()=>{
    setChangeColor(!changeColor)
   }

   const handleLogOut=()=>{
    logout()
    .then(()=>{})
    .catch(error=>console.error(error))
   }
    return (
        <Navbar collapseOnSelect expand="lg" className={`${(changeColor===true) ? 'bg-red-900' : 'bg-dark'}`} variant="dark">
        <Container>
          <div className='d-flex align-items-center'>
          <h2 className='text-white '><FaReadme/></h2>
          <h2 className='text-warning text-bolder ml-3'>Computer Learning</h2>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='mx-4 text-xl text-decoration-none text-light' to='/'>Home</Link>
              <Link className='mx-4 text-xl text-decoration-none text-light' to='/courses'>Courses</Link>
              <Link className='mx-4 text-xl text-decoration-none text-light' to='/faq'>FAQ</Link>
              <Link className='mx-4 text-xl text-decoration-none text-light' to='/blog'>Blog</Link>
             
              <Link className='text-light' to='/public'>
             {user?.photoURL?
             <Image style={{height: '30px'}} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>
            }
            </Link>
              {
              user?.uid?
              <>
                 {user?.displayName}
                 <Button className='ms-3' onClick={handleLogOut} variant="danger">Log Out</Button>
              </> :
              <>
               <Link className='mx-4 text-xl text-decoration-none text-light' to='/login'>Login</Link>
              <Link className='mx-4 text-xl text-decoration-none text-light' to='/register'>Register</Link>
              </>
            }
            </Nav>
            <Nav>
             
              <Nav.Link href="#deets">
          
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
           
              </Nav.Link>
              <div className='dark: bg-black'>
              <Button onClick={handleDarkMode} variant="success">Dark Mode</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;