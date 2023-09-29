import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
export default  function Register(){
  const navigate = useNavigate();
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
  })

   const registerUser = async (e)=>{
    e.preventDefault();
    console.log(JSON.stringify(data))
    const{name,email,password} = data
    try{
      const {data} = await axios.post('/register',{name,email,password})
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Login Successful')
        navigate('/login')
      }
    }
    catch(err){
      console.log(err)
    }
   }

    return( <>
    <div className="form-div">
    <Card id="form-card" style={{width:'50%',marginTop:'100px'}}>
      <h1>SignUp</h1>
      <Form onSubmit={registerUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={data.name} 
            onChange={(e)=>setData({...data,name: e.target.value})}
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            value={data.email} 
            onChange={(e)=>setData({...data,email:e.target.value})}
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
            value={data.password} pattern=".{8,}"  
            onChange={(e)=>setData({...data,password:e.target.value})}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Create Account
        </Button>{" "}
        <Link to="/login">
      <Button variant="primary" type="submit">
        SignIn
      </Button>
    </Link>
      </Form>

 </Card>
 </div>
        </>
    )
 }