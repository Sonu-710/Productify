const Task = require("./../Models/task");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      result: tasks.length,
      tasks: tasks,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) return res.status(404).json({ Message: "No such task found" });
    res.status(200).json({
      task,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateTask = (req, res) => {
  res.send("updated");
};

exports.deleteTask = (req, res) => {
  res.send("Deleted Task");
};
