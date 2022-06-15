import React, { useEffect } from 'react'
import {Link} from "react-router-dom"

function Login() {

  useEffect(()=>{
    window.localStorage.setItem('isloggedin',"false")
  })


  const handleClick=()=>{

    window.localStorage.setItem('isloggedin','true');

  }


  

  return (
    <div className='login'>

     <button onClick={handleClick}><Link style={{textDecoration:"none",color:"black"}} to='/home'> Login </Link></button>

    </div>
  )
}

export default Login