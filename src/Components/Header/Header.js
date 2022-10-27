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
            
              
            </Nav>
            <Nav>
            <Nav.Link href="#deets" className='text-white'>
            {
              user?.uid?
              <div>
                 <Button className='mx-4' onClick={handleLogOut} variant="primary rounded-2">Log Out</Button>
                 {user?.displayName}
                 
              </div> :
              <>
              <Link className='bg-primary rounded-2 mx-2 text-white p-2 text-decoration-none' to='/login'>Login</Link>
              <Link className='bg-primary rounded-2 mx-2 text-white p-2 text-decoration-none' to='/register'>Register</Link>
              </>
            }
            
            </Nav.Link >
            <Link className='md: flex items-center'>
             {user?.photoURL?
             <Image style={{height: '30px'}} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>
            }
            </Link>
          </Nav>
            <div className='dark: bg-black ms-4'>
              <Button onClick={handleDarkMode} variant="success">Dark Mode</Button>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;