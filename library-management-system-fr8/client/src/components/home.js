import React from 'react';
import NavBar from './navbar';
import "./css/styles.css";

export default function Home() {
    return (
        <>
            <NavBar />
            <center><br />
                <div id="home">
                    <h1 style={{color:'white'}}>Library Management system</h1>
                    <img style={{width:'50%'}} src="https://wallpapercave.com/wp/ijo8KeK.jpg" alt="library"/>
                </div>
            </center><br />
        </>
    );
}
