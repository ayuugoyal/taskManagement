import React, { useState } from "react";
import { IoMdCheckmarkCircle, IoIosRadioButtonOff } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

const Task = ({ id, status, title, description, updateMode, deletetask }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div key={id}>
      <div
        className="task"
        style={{
          backgroundColor: isHovered ? "red" : status ? "green" : "black",
        }}>
        <div className="text">{title}</div>
        <div className="text">{description}</div>
        <div className="icons">
          {status ? (
            <IoMdCheckmarkCircle className="icon" onClick={updateMode} />
          ) : (
            <IoIosRadioButtonOff className="icon" onClick={updateMode} />
          )}
          <AiFillDelete
            className="icon delete"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onClick={deletetask}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
