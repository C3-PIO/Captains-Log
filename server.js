// Add dotenv
require("dotenv").config();

// Imports or Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;
const methodOverride = require("method-override");
const logsController = require('./controllers/Logs')

// Mongoose Info
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected mon");
});

// Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
app.use((req, res, next) => {
  console.log("I'm da middleware");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use('/logs', logsController)


// Home
app.get('/', (req, res)=>{
    res.send("<h2><a href='http://localhost:3000/logs'>Welcome to the Captains Log!</a></h2>")
})

// Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
