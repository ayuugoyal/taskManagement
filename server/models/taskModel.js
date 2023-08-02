const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("taskList", taskSchema);
