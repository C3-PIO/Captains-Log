// Add dotenv
require('dotenv').config()

// Imports or Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;

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

// Data
const Logs = require('./models/logs')

// Routes

// Index GET /things
app.get('/logs', async (req, res)=>{
    const allLogs = await Logs.find({})
    res.render('Index', {logs:allLogs})
})
// New GET /things/new
app.get('/logs/new', (req, res)=>{
    res.render('New')
})
// Destroy DELETE /things/:id
// Update PUT /things/:id
// Create POST /things
app.post('/logs', async (req, res)=>{
    if (req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Logs.create(req.body),
        res.redirect(`/logs/Show`)
    } catch (error) {
        console.log ('error')
    }
})

// Edit GET /things/:id/edit
// Show GET /things/:id

// Listen
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})