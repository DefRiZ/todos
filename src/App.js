import React from "react";

import { useRefreshList } from "./hooks/useRefreshList";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const {
    list,
    value,
    setValue,
    priority,
    setPriority,
    onClickAdd,
    onClickDelete,
    onClickToogleComplete,
  } = useRefreshList();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Todo List</h1>
        <TaskForm
          onClickAdd={onClickAdd}
          value={value}
          setValue={setValue}
          priority={priority}
          setPriority={setPriority}
        />
        <TaskList
          list={list}
          onClickDelete={onClickDelete}
          onClickToogleComplete={onClickToogleComplete}
        />
      </div>
    </div>
  );
}

export default App;
