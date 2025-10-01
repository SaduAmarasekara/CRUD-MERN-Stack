const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001; // 
const host = "127.0.0.1";
const mongoose = require("mongoose");
const router = require('./router');


// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://saduvindhaya:sadu1234@cluster0.fymsxjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log('MongoDB Error:', error);
  }
}

connect();
const server = app.listen(port, host, () => {
  console.log(`Node server is listening at http://${host}:${port}`);
});

app.use('/api', router);