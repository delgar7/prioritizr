import { useEffect, useState } from "react";
import SingleTodo from "./SingleTodos";
import useAutoAnimateList from "../hooks/useAutoAnimateList";

interface TodoCategoryRowProps {
  categories: string[];
}

interface ITodo {
  id: number;
  title: string;
  status: string;
  priority: string;
  user: string[];
}

const priorityOrder = ["urgent", "high", "medium", "low", "none"];

function TodoCategoryRow({ categories }: TodoCategoryRowProps) {
  // Fetching the data from localStorage, using getItem
  const storedTodos = localStorage.getItem("todos");
  const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  // Calculate initial nextId based on the existing todos, to prevent duplicate IDs
  const initialNextId =
    initialTodos.length > 0
      ? Math.max(...initialTodos.map((todo: ITodo) => todo.id)) + 1
      : 1;

  // Hooks
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [nextId, setNextId] = useState(initialNextId);
  const listRef = useAutoAnimateList();

  // Saving the data of the Todos, using setItem (localStorage)
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

  const handlePriorityChange = (id: number, newPriority: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  const handleUserChange = (id: number, newUser: string[]) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, user: newUser } : todo
      )
    );
  };
  // Handle functions [END]

  const sortTodosByPriority = (todos: ITodo[]) => {
    return todos.sort((a, b) => {
      return (
        priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    });
  };

  return (
    <div className="flex flex-col pt-5 gap-y-5">
      {categories.map((category) => {
        const handleAddTodo = () => {
          const newTodo = {
            id: nextId,
            title: "",
            status: category,
            priority: "none",
            user: [],
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

            <ul ref={listRef}>
              {sortTodosByPriority(
                todos.filter((todo) => todo.status === category)
              ).map((todo) => (
                <SingleTodo
                  key={todo.id}
                  index={todo.id}
                  title={todo.title}
                  status={todo.status}
                  priority={todo.priority}
                  user={todo.user}
                  onStatusChange={handleStatusChange}
                  onTitleChange={handleTitleChange}
                  onPriorityChange={handlePriorityChange}
                  onUserChange={handleUserChange}
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
