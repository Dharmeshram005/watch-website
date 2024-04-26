import React from "react";
import './login.css';
import vid from '../Components/logo.mp4'
export const Login=()=>{
    return(
<div class="login">
        <form class="login-form">
            <h2>Login</h2>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
</div>
    );     

}