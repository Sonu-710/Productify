const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRouter = require("./routes/tasks");
require("dotenv").config();

//MiddleWare
app.use(express.json());

//Routes
app.get("/hello", (req, res) => {
  res.send("Welcome To Productify");
});

app.use("/api/v1/tasks", taskRouter);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB connection successful");
    app.listen(port, console.log(`Server is listening on port 3000`));
  } catch (err) {
    console.log(err);
  }
};

start();
