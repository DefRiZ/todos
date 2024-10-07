import React from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [priority, setPriority] = React.useState("low");

  function handleSubmit(e) {
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
  }

  function handleDelete(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function toogleCompleted(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Todo List</h1>
        <TaskForm
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          priority={priority}
          setPriority={setPriority}
        />
        <TaskList
          list={list}
          handleDelete={handleDelete}
          toogleCompleted={toogleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
