import React from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ list, handleDelete, toogleCompleted }) => {
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState("createdAt");

  const filteredList = list.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

  const sortedList = filteredList.sort((a, b) => {
    if (sort === "createdAt") return b.createdAt - a.createdAt;
    if (sort === "priority") return b.priority - a.priority;
    return 0;
  });
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
      <ul className="space-y-2">
        {sortedList.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            toogleCompleted={toogleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};
