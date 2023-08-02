const taskModel = require("../models/taskModel");

module.exports.getAllTask = async (req, res) => {
  const allTask = await taskModel.find();
  res.send(allTask);
};

module.exports.savedTask = async (req, res) => {
  const { status, title, description } = req.body;
  taskModel
    .create({ status, title, description })
    .then(() => {
      res.send("added succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.updateTask = async (req, res) => {
  const { _id, status } = req.body;
  taskModel
    .findByIdAndUpdate(_id, { status })
    .then(() => res.set(201).send("Updated Successfully"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteTask = async (req, res) => {
  const { _id } = req.body;
  taskModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully"))
    .catch((err) => {
      console.log(err);
    });
};
