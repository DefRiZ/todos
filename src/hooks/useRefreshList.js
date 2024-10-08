import React from "react";

export const useRefreshList = () => {
  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [priority, setPriority] = React.useState("low");

  function onClickAdd(e) {
    e.preventDefault();
    if (value.trim() === "") return;
    setList([
      ...list,
      {
        id: Date.now(),
        createdAt: new Date(),
        value,
        priority,
        completed: false,
      },
    ]);
    setValue("");
    setPriority("low");
  }

  function onClickDelete(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function onClickToogleComplete(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return {
    list,
    value,
    priority,
    setValue,
    setPriority,
    onClickAdd,
    onClickDelete,
    onClickToogleComplete,
  };
};
