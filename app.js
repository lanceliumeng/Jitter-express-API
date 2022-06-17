// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
//request -> routes -> controller -> model

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/messages-routes.js");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

const dbConnection = "mongodb://localhost/jitter_mongo_db";
mongoose.connect(dbConnection, {}, (error) => {
  if (error) {
    console.log(error, "Database error");
  } else {
    console.log("Connected to the database");
  }
});
