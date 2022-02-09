const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//signup

const db = mysql.createConnection({

    user: "root",
    host: "localhost",
    password: "",
    database: "loginsystem",
  });

  app.post("/create", (req, res) => {

    //try{

    
    
    const email = req.body.email;
    const password = req.body.Password;
    const username = req.body.username;
    // const conpassword = req.body.conpassword;
    console.log(req.body);
    
    db.query(
        "INSERT INTO users (email, password,username) VALUES (?,?,?)",
        [email, password, username],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    });

//login

app.post('/login', (req,res)=>{
  const authenticateUser =  (result) => {
    if(result.length === 0)
          return ({"IsLogged":false,"St":"This email is not Registered"})
        else{
            try{
              if(req.body.Password === result[0].password){
                return({"IsLogged":true,"St":"Welcome "+ result[0].username})}
                
              else{
                return({"IsLogged":false,"St":"Password is Incorrect"})
              }  
            }catch{
              res.status(500).send()
            }  
        }
  }
  const email =req.body.email
  var sql = "SELECT * FROM users WHERE email = ? ;";
  db.query(sql,[email],(err,result)=>{
      if(!err){
        res.send(authenticateUser(result))
        console.log(result[0])
        console.log(result[0].username)
      }
      else{
        console.log(err);
      }
  
  })
  

})



// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });