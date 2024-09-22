import React from "react";
import { handleAddTodo } from "../utils/todoUtils";
import { ITodo } from "./TodoCategoryRow";

interface NewTaskProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const NewTask: React.FC<NewTaskProps> = ({ todos, setTodos }) => {
    const handleAdd = () => handleAddTodo(todos, setTodos, "Todo");
    return (
        <div className="flex items-center px-10 py-5 mb-6 space-x-8 border-2 border-dashed rounded-md bg-primary">
            <button className="text-4xl font-inter" onClick={handleAdd}>
                +
            </button>
            <h2 className="pt-1 text-2xl font-light font-inter">New Task</h2>
        </div>
    );
};

export default NewTask;
