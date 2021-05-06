const express = require("express");
const app = express();

app.use(express.json());
app.use(express.text())
app.use(express.urlencoded({extended : true}));

app.post("/", (req, res) => {
    
});

// middleware for all routes
app.use(function(req, res, next) {
    // inject default headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => {
    res.json({ yolo : 'hello'})
});

app.listen(3000, () => console.log(`App is running on port 3000`));