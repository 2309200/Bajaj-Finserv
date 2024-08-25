require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors()); // Corrected usage

// Routers
const userRouter = require("./routes/User"); // Adjusted path to match your structure

// Root route
app.get("/", (req, res) => {
  res.send(`Server is listening on port ${port}`);
});

// Routes
app.use("/api/v1", userRouter);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI); // Uncomment when DB is used
    app.listen(port, console.log(`Server is listening at port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
