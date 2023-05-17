const express = require("express");
const router = express.Router();
const Logs = require("../models/logs");

// Index GET /things
router.get("/", async (req, res) => {
  const allLogs = await Logs.find({});
  res.render("Index", { logs: allLogs });
});

// New GET /things/new
router.get("/new", (req, res) => {
  res.render("New");
});

// Destroy DELETE /things/:id
router.delete("/:id", async (req, res) => {
  await Logs.findByIdAndRemove(req.params.id), res.redirect("/logs");
});

// Update PUT /things/:id
router.put("/:id", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  await Logs.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/logs/${req.params.id}`);
});

// Create POST /things
router.post("/", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    await Logs.create(req.body), res.redirect(`/logs`);
  } catch (error) {
    console.log(error.message);
  }
});

// Edit GET /things/:id/edit
router.get("/:id/edit", async (req, res) => {
  try {
    const foundLog = await Logs.findById(req.params.id);
    res.render("Edit", { log: foundLog });
  } catch (error) {
    console.log(error.message);
  }
});

// Show GET /things/:id
router.get("/:id", async (req, res) => {
  const log = await Logs.findById(req.params.id);
  res.render("Show", { log: log });
});

module.exports = router;
