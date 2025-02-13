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
    if (currentTab === "all") return true;
    if (currentTab === "pending") return !todo.completed;
    if (currentTab === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">ToDo App</h1>
      <div className="w-full bg-gray-200 max-w-3xl p-6 rounded-lg shadow-lg">
        <form
          onSubmit={handleAddTodo}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <input
            type="text"
            placeholder="What needs to be done?"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="flex-grow p-3 rounded-lg bg-gray-300 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
            className="p-3 rounded-lg bg-gray-300 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </form>

        <div className="flex justify-around mb-6 gap-4">
          {["all", "pending", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-3 w-full text-sm font-semibold rounded-lg transition-colors ${
                currentTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-400 hover:bg-gray-600 hover:text-white"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 flex-grow">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                  className="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
                />
                {editIndex === index ? (
                  <div className="flex gap-4 flex-wrap">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      className="p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <span
                      className={`text-white ${
                        todo.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                    <span className="text-gray-400 text-sm">{todo.date}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {editIndex === index ? (
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="text-green-500 hover:text-green-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditTodo(index)}
                    className="text-yellow-500 hover:text-yellow-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-500 hover:text-red-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
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
