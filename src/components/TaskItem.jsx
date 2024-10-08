import React from "react";
import { motion } from "framer-motion";

export const TaskItem = ({ item, onClickDelete, onClickToogleComplete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
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
    </motion.li>
  );
};
