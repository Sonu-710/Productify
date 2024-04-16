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

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) return res.status(404).json({ Message: "No such task found" });
    res.status(200).json({ task: null, status: "success" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      runValidators: true,
      new: true,
    });
    if (!task) return res.status(404).json({ Message: "No such task found" });
    res.status(200).json({ task: task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
