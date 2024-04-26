import './Nav.css'; 
import {Link} from 'react-router-dom';
import logo from './logo.jpg';
export const Navbar=()=>{
    return(
        <ul>
            <Link to="/"><img src={logo}id="img"></img></Link>
       <li class="" id='website'></li> 
       <li>
       <Link to="/Contact">Contact</Link>
        </li>
       <li>
       <Link to="/Brands">Brands<i className="fa-solid fa-caret-down" /></Link>
        </li>
       <li>
       <Link  to="/About">About</Link>
        </li>
        <li id="Login">
        <Link to="/Login">Login</Link>
        </li>
    </ul>  
       
    );
}