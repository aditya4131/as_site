import React from "react";
import NavigationBar from "../components/NavigationBar";
import './HomePage.css';

function HomePage() {
    return (
        <body id="homepage-body">
        <div className="app">
            <NavigationBar/>
            <img src="https://hej4dtfnfqkde6jg.public.blob.vercel-storage.com/personwaving.png" alt="person saying hello." id="person-waving-img"/>
            <p id='homepage-info'>Software developer and <br/> undergraduate researcher at <br/> Louisiana State University.</p>
            <footer id="footer-note-1">
                <p>Aditya Srivastava © 2024</p>
            </footer>
        </div>
        </body>
    )
}

export default HomePage;