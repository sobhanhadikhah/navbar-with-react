import React from "react";
import 'tachyons';
import './Navbar.css'
const Navbar = ()=>{
        return(
            <nav className="nav" >
                
                <a  href="/" className="sitetite" > Site Title </a>
                <ul>
                    <li className="active" >
                        <a href="/pricing" >Pricing</a>
                        
                    </li>
                    <li>
                    <a href="/About" >About</a>
                    </li> 
                    
                </ul>
            </nav>
        )
}
export default Navbar;