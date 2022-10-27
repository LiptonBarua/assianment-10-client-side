import React, { useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const Login = () => {
    const [error, setError]= useState();
    const {signIn, setLoading} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();
    // const loacation = useLocation();
  
    //  const from = loacation?.state?.from?.pathname || '/';
    const handleSubmit=(event)=>{
      event.preventDefault()
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
  
       signIn(email, password)
       .then(result=>{
         const user= result.user;
         form.reset();
         setError('');
         console.log(user)
         if(user.emailVerified){
        //   navigate(from, {replace: true});
         }
       else{
        Toast.error('your email is not verify')
       }
       })
       .catch(error=>{
        setError(error.message);
       })
       .finally(()=>{
        setLoading(false)
       })
    }
    const handleAccepted= event=>{
        setAccepted(event.target.checked);
      };
    return (
        <div className='bg-warning p-10 m-16 rounded-5'>
            <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/Register'>Login</Link> </>}  />
      </Form.Group>
      <Form.Text className="text-danger">
         {error}
        </Form.Text><br/>
      <Button variant="danger" type="submit" disabled={!accepted}>
        Login
      </Button>
    </Form>
        </div>
    );
};

export default Login;