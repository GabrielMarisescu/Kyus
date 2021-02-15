import "./Header.css"
import React from 'react'
import Logo from "./Images/Logo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header" >
         
           
           <Link to ="/"  ><img  src={Logo} alt="LogoType" className="Header__logo"  /></Link>
            
            <div className="Header__Main">
            <Link to="/" className="Header__Home">Home</Link>
            <Link to="/Questions" className="Header__Questions">Questions</Link>
        
            </div>
            </div>
    )
}

export default Header
