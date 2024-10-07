import React from "react";

export const TaskItem = ({ item, onClickDelete, onClickToogleComplete }) => {
  return (
    <li
      key={item.id}
      className={`flex justify-between items-center p-3 border rounded-md ${
        item.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <span
        onClick={() => onClickToogleComplete(item.id)}
        className={`flex-grow cursor-pointer ${
          item.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {item.value} - {item.priority}
      </span>
      <button
        className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        onClick={() => onClickDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
