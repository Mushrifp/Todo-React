import React, { useState } from "react";

const ToDo = () => {
  const [userTasks, setTask] = useState([]);
  const [userInput, setInput] = useState("");
  const [index, setIndex] = useState(1);

  const addInputToInputState = (event) => {
    setInput(event.target.value);
  };

  const addNewTask = () => {
    if (userInput.trim()) {
      let obj = {
        input: userInput,
        indexOfInpt: index,
        status: false,
      };

      setTask([...userTasks, obj]);
      setInput("");
      setIndex(index + 1);
    } else {
      alert("Please enter valid ");
    }
  };

  const deleteTask = (value) => {
    const newUserTask = userTasks.filter((task) => task.indexOfInpt !== value);
    setTask(newUserTask);
  };

  const setStatus = (value) => {
    const updatedTasks = [...userTasks];
    updatedTasks.forEach((task) => {
      if (task.indexOfInpt === value) {
        task.status = !task.status;
      }
    });
    setTask(updatedTasks);
  };

  return (
    <div className="p-6 bg-[#0A3981] max-w-lg mx-auto rounded-lg shadow-lg mt-[10%]  ">
      <h2 className="text-2xl font-bold text-[#296acc] mb-4 text-center">
        To Do
      </h2>
      <input
        type="text"
        onChange={addInputToInputState}
        value={userInput}
        placeholder="Enter Task Here"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addNewTask();
          }
        }}
        className="bg-[#1C325B] w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
      />
      <button
        className="mt-4 w-full bg-[#1C325B] text-white py-2 rounded hover:bg-blue-600"
        onClick={addNewTask}
      >
        Add Task
      </button>

      <ul className="shadow-lg">
        {userTasks.map((task) => (
          <li
            key={task.indexOfInpt}
            className="p-1 mt-2 bg-[#1F509A] rounded text-white flex justify-between items-center"
          >
            {task.input}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.status === true}
                onChange={() => setStatus(task.indexOfInpt)}
                className="form-checkbox h-4 w-4 bg-[#1C325B] text-blue-500 rounded focus:ring focus:ring-blue-400"
              />
              <button
                className="hover:bg-red-600 bg-[#1C325B] p-1 rounded"
                onClick={() => deleteTask(task.indexOfInpt)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
