import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import MainNavbar from './mainnavbar';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function Main() {
  const { user, fetchUserProfile } = useContext(UserContext);
  const [data, setData] = useState([]); 

  useEffect(() => {
    const refreshData = async () => {
      await fetchUserProfile();
    };

    axios
      .get('/getbook')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    refreshData();
  }, [fetchUserProfile]);

  return (
    <div>
      {!!user && (
        <>
          <MainNavbar />
          <br />
          <h1 style={{ textAlign: 'center', fontFamily: 'fantasy', marginTop: '20px' }}>welcome {user.name}</h1><br/>
          <h1>List of books</h1><br/><br/>
          {data.map((item, index) => (
            <div key={index}>
              <br /><br />
              <center>
                <Card id="home-card" style={{ width: "20%", marginTop: "-40px", background: "#b5e5cf", borderRadius: "30px" }}>
                  <br />
                  <Card.Body>
                  <img src={item.imageUrl} alt={`${item.title} Book`} style={{ maxWidth: "100%", maxHeight: "150px" }} /><br/>
                    <Card.Title>Title: {item.title} Book</Card.Title>
                    <Card.Text id="card-text">Author: {item.author}</Card.Text>
                    <Card.Text id="card-text">Description: {item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </center><br/><br/>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
