import Task from "./components/task";
import { useState, useEffect } from "react";
import {
  updateTask,
  addTask,
  getAllTasks,
  deleteTask,
} from "./utils/HandleApi";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskId, setTaskId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getAllTasks(setTasks);
  }, []);

  const updateing = (_id, status) => {
    setIsUpdate(true);
    setTaskId(_id);
    if (status) {
      setStatus(false);
      toast.error("Marked as not completed!");
    } else {
      setStatus(true);
      toast.success("Marked as completed!!");
    }
  };

  if (isUpdate) {
    updateTask(taskId, status, setTasks, setIsUpdate);
  }

  console.log(status);
  return (
    <div className="App">
      <div className="container">
        <h1>Task Management Application</h1>
        <div className="top">
          <div className="feilds">
            <input
              type="text"
              placeholder="Add title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Toaster />
          </div>
          <button
            className="add"
            onClick={() =>
              addTask(title, description, setTitle, setDescription, setTasks)
            }>
            Add
          </button>
        </div>
        <li className="list">
          {tasks.map((items) => (
            <>
              <Task
                id={items._id}
                status={items.status}
                title={items.title}
                description={items.description}
                updateMode={() => updateing(items._id, items.status)}
                deletetask={() => deleteTask(items._id, setTasks)}
              />
            </>
          ))}
        </li>
      </div>
    </div>
  );
}

export default App;
