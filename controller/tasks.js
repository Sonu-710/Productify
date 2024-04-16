const Task = require("./../Models/task");

exports.getAllTasks = (req, res) => {
  res.send("All Items");
};

exports.getTask = (req, res) => {
  res.send("Get one task");
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({message:err});
  }
};

exports.updateTask = (req, res) => {
  res.send("updated");
};

exports.deleteTask = (req, res) => {
  res.send("Deleted Task");
};
