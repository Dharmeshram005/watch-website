import React from "react";
import "./Welpage.css"
import vid2 from './vid2.mp4';
import "./Rem.css"
import watch from "./watch.jpg";
import watch1 from "./watch1.jpg";
import watch2 from "./watch2.jpg";
import { Link } from "react-router-dom";
import "./Welpage.css"
export const Home=()=>{
    return<div>
       <div  className="welcome">
    <video  autoPlay muted loop id="Video">
    <source src={vid2} type="video/mp4"></source>
    </video>
    <div  className="text">
    <h1>Elevate Your Style with 'MARVEL' Watches</h1>
    <h2>Make a statement with our exquisite timepieces</h2>
    < h2>Craftsmanship Redefined</h2>
    <h3>Experience the artistry behind every tick</h3>
    </div>
 </div>
 <div className="container">
  <div className="row" style={{backgroundColor:"grey"}}>
    <div className="column-66">
      <h1 ><b>The App</b></h1>
      <h1><b>Why buy it?</b></h1>
      <p><span >Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button className="button">Download Application</button>
    </div>
    <div className="column-33">
        <img src={watch} alt='image' width="100%" height="200px" />
    </div>
  </div>
</div>

<div className="container">
  <div className="row" style={{backgroundColor:"yellow"}}>
    <div className="column-33">
      <img src={watch1} alt='image'/>
    </div>
    <div className="column-66">
      <h1 className="xlarge-font"><b>Clarity</b></h1>
      <h1 className="large-font"><b>Pixels, who?</b></h1>
      <p><span >A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="button">Read More</button>
    </div>
  </div>
</div>

<div className="container">
  <div className="row" style={{backgroundColor:"grey"}}>
    <div className="column-66">
      <h1 className="xlarge-font"><b>The App</b></h1>
      <h1 className="large-font"><b>Why buy it?</b></h1>
      <p><span>Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="button">Download Application</button>
    </div>
    <div className="column-33">
        <img src={watch2} alt='image'/>
    </div>
  </div>
</div>

    </div>;
};
