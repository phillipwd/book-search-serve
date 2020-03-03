const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes"); wait on this for api and view
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// app.use(routes); api and view

mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, function(){
    console.log("API server listening on PORT" + PORT);    
})