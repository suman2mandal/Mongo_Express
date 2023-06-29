const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri="mongodb+srv://Suman:1qsc@merncluster.jeavhtz.mongodb.net/ClientSites?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(5002, () => {
  console.log("Server started on port 8000");
});
