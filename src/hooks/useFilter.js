import React from "react";

export const useFilter = (list) => {
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

  return {
    filter,
    setFilter,
    sort,
    setSort,
    sortedList,
  };
};
