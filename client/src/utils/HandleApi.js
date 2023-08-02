import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = "https://taskmanagement-server-cjew.onrender.com";

const getAllTasks = (setTasks) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log(data);
      setTasks(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addTask = (title, description, setTitle, setDescription, setTasks) => {
  axios
    .post(`${baseUrl}/save`, { status: false, title, description })
    .then((data) => {
      console.log(data);
      setTitle("");
      setDescription("");
      getAllTasks(setTasks);
      toast.success("Added Successfully!!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateTask = (taskId, status, setTasks, setIsUpdate) => {
  axios
    .post(`${baseUrl}/update`, { _id: taskId, status })
    .then((data) => {
      console.log(data);
      setIsUpdate(false);
      getAllTasks(setTasks);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTask = (taskId, setTasks) => {
  axios
    .post(`${baseUrl}/delete`, { _id: taskId })
    .then((data) => {
      console.log(data);
      getAllTasks(setTasks);
      toast("Deleted Successfully!!", {
        icon: "❕",
        style: {
          borderRadius: "10px",
          background: "red",
          color: "#fff",
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllTasks, addTask, updateTask, deleteTask };
