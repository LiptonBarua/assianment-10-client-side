import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../Context/AuthProvider';
import './Register.css'
import { Toast } from 'react-bootstrap';



const Register = () => {
    const [error, setError]= useState('');
    const [accepted, setAccepted] = useState(false);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
      const{createUser, updateUserProfile, verifyEmail, providerLogin, github}=useContext(AuthContext);
      const handleSubmit=(event)=>{
          event.preventDefault()
          const form = event.target;
          const name= form.name.value;
          const photoURL = form.photoURL.value;
          const email = form.email.value;
          const password= form.password.value;
  
          createUser(email, password)
          .then(result=>{
              const user = result.user;
              form.reset();
              setError('');
              handleUpdateProfile(name, photoURL)
              handleVerificationEmail();
              Toast.success('Please your email verify');
              console.log(user)
              
          })
          .catch(error=>{
            setError(error.message);
           })
      };
  
      const handleLogin=()=>{
        providerLogin(googleProvider)
        .then(result=>{
          const user = result.user;
        })
        .catch(error=>console.error(error))
      }

      const handleGithubLogin=()=>{
        github(githubProvider)
        .then(result=>{
            const user = result.user;
        })
        .catch(error=>console.error(error))
      }
      const handleUpdateProfile=(name, photoURL)=>{
        const profile = {
          displayName: name,
          photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
      }
  
      const handleAccepted= event=>{
        setAccepted(event.target.checked);
      };
  
      const handleVerificationEmail=()=>{
        verifyEmail()
        .then(()=>{})
        .catch(error=>console.error(error))
      }
    return (
        <Form onSubmit={handleSubmit} className='bg-warning p-10 m-16 rounded-5'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Photo URL" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/login'>Login</Link> </>}  />
        </Form.Group>
        <Form.Text className="text-muted">
             {error}
          </Form.Text><br/>
           
          <div className='text-center'>
          <Button className='px-5 ' variant="primary" type="submit" disabled={!accepted}>
          Register 
        </Button> <br/>
          <div className='flex items-center justify-center'>
          <Button className=' bg-info text-8xl roundedCircle mt-2 text-danger' onClick={handleLogin} variant="bg-info mb-2 px-16"><FaGoogle></FaGoogle></Button><br/>
         <Button onClick={handleGithubLogin} variant="roundedCircle bg-info text-8xl m-3 rounded-full text-danger"><FaGithub></FaGithub> </Button>
          </div>
          </div>
      </Form>
    );
};

export default Register;