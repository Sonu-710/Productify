const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const taskRouter = require("./routes/tasks");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

//MiddleWare
app.use(express.static("./public"));
app.use(express.json());

//Routes
app.use("/api/v1/tasks", taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

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
