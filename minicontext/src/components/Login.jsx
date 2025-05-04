import React, { useContext, useState } from 'react';
import Usercontext from '../context/UserContext';


function Login() {
    const [username, setusername]=useState('')
    const [password, setpassword]=useState('')

    const {setUser}=useContext(Usercontext) //imp ;is important because it's how you access the setUser function that was provided by the context. Without this line, your component doesn't know what setUser is — and you'll get an error like: user not defined

    // useContext is a React Hook used to access (or "call") a context, like Usercontext, inside your component.


    const handelSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})//we are sending the data

    }

  return (
    <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            placeholder='username'
            />
            {" "}
            <input type="text"
            value={password}  // isko hum isliye likhtey kyun ki usestate ki value ko use karna hota hai.
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='password'
            />
            <button onClick={handelSubmit}>submit</button>
    
    </div>




    
  )
}

export default Login