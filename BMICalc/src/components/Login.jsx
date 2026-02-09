import React, { useState } from 'react'
import './Login.css'

function Login() {
     const [username,setUsername]=useState("");
     const [password,setPassword]=useState("");
     const handleLogin =(e)=>{
         e.preventDefault();
         if(username==="admin" && password==="1234"){
            alert("Login successful");
         }else{
            alert("Invalid username or password");
         }
     }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-title">Login</div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Username" id='cls1'
            value={username} 
            onChange={(e)=>setUsername(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Password" id='cls2'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login