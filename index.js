const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;

const blogRoute = require("./routes/Blog");

// middlewares :
app.use(express.json());

// mounting :
app.use("/api/v1", blogRoute);

// setting connection :
const dbconnect = require("./config/Database");
dbconnect().catch(err => { 
  console.error("Database connection failed:", err);
  process.exit(1); 
});

// rendering :
app.listen(port, () => {
  console.log(`App started on http://localhost:${port}`); // Improved logging message
});

// default route :
app.get("/", (req, res) => {
  res.send("hi home");
});