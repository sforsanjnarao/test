import React from "react";

function Tasks({ text, deleteTask }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 text-gray-900 p-2 rounded-md shadow-md">
      <span className="text-lg">{text}</span>
      <button 
        className="text-red-500 hover:bg-red-100 p-2 rounded-md transition" 
        onClick={deleteTask}>
        X
      </button>
    </div>
  );
}

export default Tasks;