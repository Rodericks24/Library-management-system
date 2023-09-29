import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from './api';
export default function Admin() {
  const navigate = useNavigate()
const [data,setData]=useState({
  email:'',
  password:'',
})
  const loginUser = async(e)=>{
    e.preventDefault();
    const {email,password} = data
    try{
      const {data} = await axios.post('/login',{
        email,
        password
      })
      if(data.error){
        toast.error(data.error)
       
      }
      if (!data.error) {
        setData({});
        navigate('/admindashboard');
        fetchUserProfile();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="form-div">
    <Card id="form-card" style={{width:'50%',marginTop:'100px'}}>
      <h1>Admin Login</h1>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={data.email} 
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            onChange={(e)=>setData({...data,email: e.target.value})}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            placeholder="Password atleast 8 characters"
            value={data.password} pattern=".{8,}"   onChange={(e)=>setData({...data,password: e.target.value})}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
        SignIn
        </Button>{" "}
        <Button
          variant="primary"
          href="/"
        >
        Back
        </Button>
      </Form>

 </Card>
 </div>
    </>
  );
}
