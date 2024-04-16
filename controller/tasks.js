exports.getAllTasks = (req, res) => {
  res.send("All Items");
};

exports.getTask = (req, res) => {
  res.send("Get one task");
};

exports.createTask = (req, res) => {
  res.send("created a task");
};

exports.updateTask = (req, res) => {
  res.send("updated");
};

exports.deleteTask = (req, res) => {
  res.send("Deleted Task");
};
