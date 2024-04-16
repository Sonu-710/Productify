exports.getAllTasks = (req, res) => {
  res.send("All Items");
};

exports.getTask = (req, res) => {
  res.send("Get one task");
};

exports.createTask = (req, res) => {
  res.json(req.body);
};

exports.updateTask = (req, res) => {
  res.send("updated");
};

exports.deleteTask = (req, res) => {
  res.send("Deleted Task");
};
