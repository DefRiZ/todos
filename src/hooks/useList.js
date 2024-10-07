import React from "react";

export const useList = ({ value, setValue, priority, setPriority }) => {
  const [list, setList] = React.useState([]);

  function onClickAdd(e) {
    e.preventDefault();
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

    console.log(list);
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
    onClickAdd,
    onClickDelete,
    onClickToogleComplete,
  };
};
