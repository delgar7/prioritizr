import { useEffect, useState } from "react";
import SingleTodo from "./SingleTodos";

interface TodoCategoryRowProps {
  categories: string[];
}

interface ITodo {
  id: number;
  title: string;
  status: string;
}

function TodoCategoryRow({ categories }: TodoCategoryRowProps) {
  // LocalStorage getItem for Todos
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [nextId, setNextId] = useState(1);

  // LocalStorage setItem for Todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Handle functions [START]
  const handleStatusChange = (id: number, newStatus: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const handleTitleChange = (id: number, newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };
  // Handle functions [END]

  return (
    <div className="flex flex-col gap-y-5 pt-5">
      {categories.map((category) => {
        const handleAddTodo = () => {
          const newTodo = {
            id: nextId,
            title: "",
            status: category,
          };
          setTodos((prevTodos) => [...prevTodos, newTodo]);
          setNextId((prevId) => prevId + 1);
        };

        return (
          <div key={category} className="category--item">
            <h2 className="p-3 text-2xl font-bold bg-slate-300 dark:bg-slate-800 dark:text-gray-400">
              {category}
            </h2>
            <button
              className="py-0.5 px-2 border border-gray-400 border-3 rounded bg-gray-200"
              onClick={handleAddTodo}
            >
              +
            </button>
            <ul>
              {todos
                .filter((todo) => todo.status === category)
                .map((todo) => (
                  <SingleTodo
                    key={todo.id}
                    index={todo.id}
                    title={todo.title}
                    status={todo.status}
                    onStatusChange={handleStatusChange}
                    onTitleChange={handleTitleChange}
                  />
                ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default TodoCategoryRow;
