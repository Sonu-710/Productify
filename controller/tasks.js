const Task = require("./../Models/task");
const asyncWrapper = require("./../middleware/async");
const{createCustomError}=require('./../errors/custom-errors')
exports.getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({
    tasks,
  });
});

exports.getTask = asyncWrapper(async (req, res,next) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskId}`,404))
  }
  res.status(200).json({
    task,
  });
});

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

exports.deleteTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) return next(createCustomError(`No task with id: ${taskId}`,404))
  res.status(200).json({ task: null, status: "success" });
});

exports.updateTask = asyncWrapper(async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!task) return next(createCustomError(`No task with id: ${taskId}`,404))
  res.status(200).json({ task });
});
