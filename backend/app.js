require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// Connect DB (commented out)
// const connectDB = require("./db/connect");

// Routers
const userRouter = require("../backend/routes/User");

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send(`Server is listening on port ${port}`);
});

// Routes
app.use("/api/v1", userRouter);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
