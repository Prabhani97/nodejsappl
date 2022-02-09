import React, { useState } from "react";
import {Outlet, Link, BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";

function LogIn() {
  const Navigate=useNavigate();
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const Login=() => {
    Axios.post('http://localhost:3001/login',{
      email: email,
      Password: password,
      
    }
  
  ).then((response)=>{
      const Logged = response.data
      
      
      if (Logged.IsLogged){
        
        Navigate("/board")
      }
    });
  };

  return (
    <div className="loginContainer">
      <label>Email:</label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={Login}> Login </button>
    </div>
  );
}

export default LogIn;