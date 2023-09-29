import { useState,useEffect } from "react"

import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../components/styles.css"
 export default  function Create(){

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
     const [block,setBlock]=useState({ display: "none" });
     const [none,setNone]=useState({ display: "block" });
     const [data, setData] = useState([]);

     useEffect(() => {
       fetchData();
     }, []);
   
     const fetchData = () => {
       axios
         .get("https://badbankbackend-neut.onrender.com/getlist")
         .then(response => {
           setData(response.data);
         })
         .catch(err => console.log(err));
     };
     const existingEmail = data.some((item) => item.email === email);

 
     async function handle(e) {
      e.preventDefault();
      if (!name) {
        alert(" Enter your name.");
      } else if (!email) {
        alert(" Enter your email.");
      } else if (!password) {
        alert("Enter your password.");
      } else if (password.length < 8) {
        alert("Please enter a password minimum of 8 characters.");
      } 
      else if (existingEmail) {
        console.log(existingEmail);
        alert("Email already exists.");
      }
     else {
          alert("Registered successfully.");
          setName("");
          setEmail("");
          setPassword("");
          setBlock({ display: "block" });
          setNone({ display: "none" });

      var balance = 0
      axios.post('https://badbankbackend-neut.onrender.com/create',{name,email,password,balance})
      .then(result=>{console.log(result)
       })
      .catch(err=>console.log(err));
     }
    }
  
  
    // condition for button
    const isFormFilled = name && email && password;
  
  
    return( <>
    <div className="form-div">
    <Card id="form-card">
      <h1>Create Account</h1>
      <Form  style={none}  onSubmit={(e)=> {handle(e)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email} 
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            onChange={(e)=>setEmail(e.target.value)}
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
            value={password} pattern=".{8,}"  onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!isFormFilled}
        >
          Create Account
        </Button>
      </Form>

 <div  style={block}>
  <center>
 <Button type="submit" id="add-btn" onClick={()=>{setNone({display:"block"});setBlock({display:"none"});}} >Add account</Button></center>    
 </div> 
 </Card>
 </div>
        </>
    )
 }