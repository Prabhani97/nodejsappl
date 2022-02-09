
import { useState } from "react";
import Axios from "axios";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [conpassword, setConPassword] = useState("");
  

  const signUp=() => {
    console.log(email);
    console.log(password);
    console.log(username);
    if (conpassword===password){
    Axios.post('http://localhost:3001/create', {
      email: email,
      Password: password,
      username: username
    }).then((response)=>{
      alert(response.data);
    });}
    else{alert("Passwords don't match");}
  };

  return (
    <div className="App">
      <div className="registration">
      <label>UserName:</label>
        <input type ="text" onChange ={(event)=> {setUserName(event.target.value);}}/>
        <label>Email:</label>
        <input type ="text" onChange ={(event)=> {setEmail(event.target.value);}}/>
        
        <label>Password:</label>
        <input type ="password" onChange ={(event)=> {setPassword(event.target.value);}}/>
        <label>Confirm Password:</label>
        <input type ="password" onChange ={(event)=> {setConPassword(event.target.value);}}/>
        
        <button onClick={signUp}>Sign Up</button>
      </div>
      
          
    
      </div>
  
  );
}

export default Signup;


