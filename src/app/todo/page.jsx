"use client";
import { useState, useEffect } from "react";

export default function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentTab, setCurrentTab] = useState("all");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim().length > 0) {
      setTodos([
        ...todos,
        {
          text: todoText.trim(),
          date: todoDate,
          completed: false,
        },
      ]);
      setTodoText("");
      setTodoDate("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
    setEditDate(todos[index].date);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editText, date: editDate } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
    setEditDate("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (currentTab === "all task") return true;
    if (currentTab === "pending") return !todo.completed;
    if (currentTab === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl text-accent font-bold text-center mb-8">
        Todo App
      </h1>
      <div className="container w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <form
          onSubmit={handleAddTodo}
          className="flex flex-col sm:flex-row mb-6 gap-4 w-full"
        >
          <input
            type="text"
            placeholder="What needs to be done?"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="flex-grow p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
            className="w-full sm:w-auto p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 border-2 border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-primary focus:ring-2 focus:ring-offset-1 focus:ring-accent"
          >
            Add
          </button>
        </form>

        <div className="flex justify-around mb-6 gap-3">
          {["all task", "pending", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-4 border-2 w-full border-accent text-accent font-medium rounded-lg ${
                currentTab === tab
                  ? "bg-accent text-primary"
                  : "bg-transparent hover:bg-accent hover:text-primary"
              } focus:ring-2 focus:ring-offset-1 focus:ring-accent`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 flex-grow">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                  className="h-5 w-5 text-accent focus:ring-2 focus:ring-accent"
                />
                {editIndex === index ? (
                  <div className="flex gap-4 flex-wrap">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      className="p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-4 p-4">
                    <span
                      className={`text-white flex-grow ${
                        todo.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                    <span className="text-gray-500 text-sm flex-shrink-0">
                      {todo.date}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {editIndex === index ? (
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="text-green-500 hover:text-green-400 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 text-green-500 hover:text-green-400"
                    >
                      <path
                        d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M7 3L7 8L15 8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M17 20L17 13L7 13L7 20"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditTodo(index)}
                    className="text-yellow-500 hover:text-yellow-400 flex items-center"
                  >
                    <svg
                      className="w-6 stroke-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-500 hover:text-red-400 flex items-center"
                >
                  <svg
                    className="w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
