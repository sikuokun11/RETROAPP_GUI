import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import  "./stylesheets/style.css";

function SignInUp() {

    const [isLogginActive,setIsLogginActive] = useState(true);
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    const currentRightClassName = isLogginActive ? "right-side right" : "right-side left";

    const changeSite = e => {
        setIsLogginActive(!isLogginActive);
    };

    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogginActive && 
              <Login/>
            }
            {!isLogginActive && 
              <Register/>
            }
          </div>
          <RightSide
            classNameRight={currentRightClassName}
            current={current}
            currentActive={currentActive}
            onClick={changeSite}
            onChange={changeSite}
          />
        </div>
      </div>
    );
}

const RightSide = props => {
    return (
      <div
        className= {props.classNameRight}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };

export default SignInUp
