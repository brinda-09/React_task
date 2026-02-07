import React, { useState } from 'react'

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
    <form onSubmit={handleLogin}>
   
    <div>Login <br />
      
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value) } required/>
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value) } required/>
        <br />
        <br />
        <button type='submit'>Login</button>
    </div>
    </form>

  )
}

export default Login