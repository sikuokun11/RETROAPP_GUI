import Axios from 'axios';
import React, { useState } from 'react';
import loginImg from "../../login.svg";
import { message } from 'antd';
import { useHistory } from "react-router";

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [statusLogin, setStatusLogin] = useState('');
    const history = useHistory();

    const login = (e) => {
      // e.preventDefault();
      // fetch('http://localhost:5000/users/login', {
      //  method: 'post',
      //  headers: {'Content-Type':'application/json'},
      //  body: JSON.stringify({
      //   "username": username,
      //   "password": password
      //  })
      // }).then((response) => {
      //  let data =  response.json();
      //  console.log(data);
      // }).then((data) =>{
      //   console.log('PING');
      //   console.log(data);
      // }).catch(err => {
      //   console.log("ERROR: " + err);
      // });
      Axios.post('http://localhost:5000/users/login',{
        "username": username,
         "password": password
      }).then((response) => {
         if(response.data == false){
          message.error('Login fail! Wrong username / password!!');
         }
         else{
          message.success('Login successfully');
          history.push({
            pathname:  "/myboards",
            state: {
              response: "myboards page" 
            } 
         });
         }
         console.log(response);
        });
    }

    

    return (
        <div className="base-container" ref={props.refContainer} >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt =""/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(e) => {
                  setUsername(e.target.value);
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"onChange={(e) => {
                  setPassword(e.target.value);
              }} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={login}>
            Login
          </button>
        </div>
      </div>
    )
}

export default Login
