import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
//import logo from './logo.svg';
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/LogIn";
import Signup from "./pages/Signup";
import Myboards from "./pages/Myboard";
import Newboard from "./pages/Newboard";
import Board from "./pages/Board";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
        <Route path="/" exact element={<Home/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/myboard" element={<Myboards/>}/>
          <Route path="/newboard"element={<Newboard/>}/>
          <Route path="/signup"  element={<Signup/>}/>
          <Route path="/board"  element={<Board/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
