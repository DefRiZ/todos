import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFilter } from "../hooks/useFilter";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ list, onClickDelete, onClickToogleComplete }) => {
  const { filter, sort, setFilter, setSort, sortedList } = useFilter(list);
  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <label className="mr-2">Filter by status: </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div>
          <label className="mr-2">Sort by: </label>
          <select
            className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="createdAt">Creation date</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
      <motion.ul className="space-y-2">
        <AnimatePresence>
          {sortedList.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              onClickDelete={onClickDelete}
              onClickToogleComplete={onClickToogleComplete}
            />
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};
