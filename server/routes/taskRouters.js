const { Router } = require("express");
const {
  getAllTask,
  savedTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = Router();

router.get("/", getAllTask);

router.post("/save", savedTask);

router.post("/delete", deleteTask);

router.post("/update", updateTask);

module.exports = router;
