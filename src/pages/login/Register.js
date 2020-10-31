import React,{ useState } from 'react';
import loginImg from "../../login.svg";

function Register(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    
    fetch('http://localhost:5000/users/register', {
     method: 'post',
     headers: {'Content-Type':'application/json',
              'Accept': 'application/json'  
      },
     body: JSON.stringify({
      "username": username,
      "password": password
     })
    }).then((response) => {
      console.log(response);
    });
  }

    return (
        <div className="base-container" ref={props.refContainer}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt=""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(e) => {
                  setUsername(e.target.value);
              }} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={(e) => {
                  setPassword(e.target.value);
              }}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick ={register}>
            Register
          </button>
        </div>
      </div>
    )
}

export default Register
