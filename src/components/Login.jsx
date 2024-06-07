import React, { useState } from 'react';

function Login() {
  const [placeholder, setPlaceholder] = useState({
    username: 'Username',
    password: 'Password'
  })

  return (
    <div className='login'>
    <form action="">
    <input type="text"  className="txt"
        onChange={(e) => setPlaceholder(prev => (
          {
            ...prev,
            username: e.target.value
          }
        ))} id="" placeholder={placeholder.username} />
    
      <br />
      <br />
      <input type="password" className="txt" 
          onChange={(e) => setPlaceholder(prev => (
            {
              ...prev,
              password: e.target.value
            }
          ))} placeholder={placeholder.password}/>
      
      <br />
      <div className="forget">
        <input type="checkbox" name="" className="Remember" /> &nbsp;<p className="rem">Remember me</p>

        <a href="pass" className="pass">Forgot Password?</a>
      </div>
      <button type="submit" className='log'>Login</button>
    </form>
    
     <p>Don't have an account? <a href="register" className='reg'>Register</a></p>
   
  </div>
  );
}

export default Login;
