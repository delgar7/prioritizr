import { useEffect, useState, useMemo, useCallback } from "react";
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

    // Event handlers [START]
    const handleStatusChange = useCallback((id: number, newStatus: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, status: newStatus } : todo
            )
        );
    }, []);

    const handleTitleChange = useCallback((id: number, newTitle: string) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, title: newTitle } : todo
            )
        );
    }, []);

    const handlePriorityChange = useCallback(
        (id: number, newPriority: string) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, priority: newPriority } : todo
                )
            );
        },
        []
    );

    const handleUserChange = useCallback((id: number, newUser: string[]) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, user: newUser } : todo
            )
        );
    }, []);
    // Handle functions [END]

    const sortedTodos = useMemo(() => {
        return todos.sort((a: ITodo, b: ITodo) => {
            return (
                priorityOrder.indexOf(a.priority) -
                priorityOrder.indexOf(b.priority)
            );
        });
    }, [todos]);

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
                        <div className="flex items-center justify-between w-full px-2 py-3 bg-primary dark:bg-slate-800 dark:text-gray-400">
                            <h2 className="text-lg font-light text-gray-700">
                                {category}
                            </h2>
                            <button
                                className="py-0.5 px-2"
                                onClick={handleAddTodo}
                            >
                                +
                            </button>
                        </div>

                        <ul ref={listRef}>
                            {sortedTodos
                                .filter((todo) => todo.status === category)
                                .map((todo) => (
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
