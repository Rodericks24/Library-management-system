import AdminNavbar from './adminnav';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import "./css/styles.css";
import axios from 'axios';

export default function AdminDashboard() {
    const [data, setData] = useState([]); 

    useEffect(() => {  
        axios.get('/getbook')
          .then(response => {
            setData(response.data)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
        <div>
            <>
                <AdminNavbar /><br />
                <h1 style={{ textAlign: 'center', fontFamily: 'fantasy', marginTop: '20px' }}>
                    Welcome  Admin
                </h1><br />
                <h1 style={{color:'wheat'}}>List of books</h1><br/><br/>
                {data.map((item, index) => (
                    <div key={index}>
                
                        <center>
                            <Card id="home-card" style={{ width: "20%", marginTop: "-40px", background: "#b5e5cf", borderRadius: "30px" }}><br />
                                <Card.Body>
                                <img src={item.imageUrl} alt={`${item.title} Book`} style={{ maxWidth: "100%", maxHeight: "150px" }} /><br/>
                                    <Card.Title>Title: {item.title} Book</Card.Title>
                                    <Card.Text id="card-text">Author: {item.author}</Card.Text>
                                    <Card.Text id="card-text">Description: {item.description}</Card.Text>
                                </Card.Body>
                            </Card><br/><br/>
                        </center>
                    </div>
                ))}
            </>
        </div>
    );
}
