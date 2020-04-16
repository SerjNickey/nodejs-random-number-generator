const express = require("express");
 
const app = express();


app.get("/", (req, res) => {    
  res.send("Main Page"); 
  console.log("Main Page");    
});

app.get("/api/number", (req, res) => {   
  res.type("text/plain");
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  res.json({number: randomNumber});
});


const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

