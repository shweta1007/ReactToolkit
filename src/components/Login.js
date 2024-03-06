

import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
// import { testState } from '../Redux/reducer/userReducer'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useEffect } from 'react';
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = () => {
    
        navigate('/products')
    }
    useEffect ( async () => {
        console.log("useEffect eweis running from login ");
        // dispatch(testState('barche')); 
        axios.post('http://localhost:5000/api/auth/login', { username:"dilip",  password:"11111111"
        })
        .then((response) => { 
console.log(response.data.accsessToken);
         

   if(response.data) {
    
   console.log(response.data.accessToken,"===========accetfk");
  //  dispatch(testState(response.data.accsessToken));
   localStorage.setItem('newUser',response.data.accsessToken)
   }


       
        // const token  =  response.data.accsessToken;
           

        //   console.log(response.data.accsessToken,"++++++++++++++++response of login token");

       ///   JSON.stringify(localStorage.setItem(response.data.accsessToken,'myToken'))
            //  console.log(typeof(token));
        }, (error) => {
          console.log(error,"=================error");
        });
    },[])


  return (
      <>
      <h1>Login Page</h1>
    <Form className=''> 
    <Row>
        <Col lg={2}>
  <Form.Group className="lg-3"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Col>
  </Row>
 <Row>
   <Col lg={2}>
  <Form.Group className="lg-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Col>
  </Row>

  <Row>
  <Col lg={2}>
  <Form.Group className="lg-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox"label="Check me out" />
  </Form.Group>
  </Col>
  </Row>
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
</>
  )
}

export default Login;