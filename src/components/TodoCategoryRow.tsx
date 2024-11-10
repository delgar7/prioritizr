import React, { useMemo, useCallback, useEffect } from "react";
import SingleTodo from "./SingleTodos";
import useAutoAnimateList from "../hooks/useAutoAnimateList";
import { handleAddTodo } from "../utils/todoUtils.js";

export interface ITodo {
    id: number;
    title: string;
    status: string;
    priority: string;
    user: string[];
}

interface IStatusCounts {
    [key: string]: number;
}

interface TodoCategoryRowProps {
    categories: string[];
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    onStatusCountsChange: (counts: IStatusCounts) => void;
}

const priorityOrder = ["urgent", "high", "medium", "low", "none"];

const TodoCategoryRow: React.FC<TodoCategoryRowProps> = ({
    categories,
    todos,
    setTodos,
    onStatusCountsChange,
}) => {
    const listRef = useAutoAnimateList();

    // Event handlers [START]
    const handleStatusChange = useCallback(
        (id: number, newStatus: string) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, status: newStatus } : todo
                )
            );
        },
        [setTodos]
    );

    const handleTitleChange = useCallback(
        (id: number, newTitle: string) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, title: newTitle } : todo
                )
            );
        },
        [setTodos]
    );

    const handlePriorityChange = useCallback(
        (id: number, newPriority: string) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, priority: newPriority } : todo
                )
            );
        },
        [setTodos]
    );

    const handleUserChange = useCallback(
        (id: number, newUser: string[]) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, user: newUser } : todo
                )
            );
        },
        [setTodos]
    );
    // Event handlers [END]

    const sortedTodos = useMemo(() => {
        return todos.sort((a, b) => {
            return (
                priorityOrder.indexOf(a.priority) -
                priorityOrder.indexOf(b.priority)
            );
        });
    }, [todos]);

    // - 🪰 BUG (Infinite loop => see console) -
    // const calculateStatusCounts = useCallback(() => {
    //     const counts: IStatusCounts = {
    //         "In Review": 0,
    //         "In Progress": 0,
    //         Todo: 0,
    //         Done: 0,
    //         Canceled: 0,
    //     };
    //     todos.forEach((todo) => {
    //         if (counts[todo.status] !== undefined) {
    //             counts[todo.status]++;
    //         }
    //     });
    //     onStatusCountsChange(counts);
    // }, [todos, onStatusCountsChange]);

    // useEffect(() => {
    //     calculateStatusCounts();
    // }, [todos, calculateStatusCounts]);
    // - 🪰 BUG END (Infinite loop => see console) -

    return (
        <div className="flex flex-col gap-y-5">
            {categories.map((category) => {
                const handleAdd = () =>
                    handleAddTodo(todos, setTodos, category);

                return (
                    <div key={category} className="category--item">
                        <div className="flex items-center justify-between w-full px-2 py-3 mb-5 bg-primary dark:bg-darkHeading dark:text-darkText">
                            <h2 className="pl-3 text-lg font-light text-gray-700 dark:text-darkText">
                                {category}
                            </h2>
                            <button className="py-0.5 px-2" onClick={handleAdd}>
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
};

export default TodoCategoryRow;
