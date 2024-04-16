const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");

//MiddleWare
app.use(express.json());

//Routes
app.get("/hello", (req, res) => {
  res.send("Welcome To Productify");
});

app.use("/api/v1/tasks", taskRouter);

const port = 3000;
app.listen(port, console.log(`Server is listening on port 3000`));
