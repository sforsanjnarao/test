import React, { useState } from "react";
import Tasks from "./Tasks";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-600 to-slate-900 text-white p-4">
      <div className="w-full max-w-md bg-white text-gray-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">My Todo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={task}
            maxLength={50}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            type="text"
            placeholder="Add a new task"
          />
          <button 
            onClick={addTask} 
            className="bg-emerald-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-emerald-600 active:scale-95 transition">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((item, index) => (
            <Tasks key={index} text={item} deleteTask={() => deleteTask(index)} />
          ))}
        </ul>

        <footer className="mt-4 text-center text-gray-700 font-semibold">
          <h3>Total Tasks: {todos.length}</h3>
        </footer>
      </div>
    </main>
  );
}

export default App;