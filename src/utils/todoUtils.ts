import { ITodo } from "../components/TodoCategoryRow";

export const handleAddTodo = (
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    status: string
) => {
    const newTodo: ITodo = {
        id:
            todos.length > 0
                ? Math.max(...todos.map((todo) => todo.id)) + 1
                : 1,
        title: "",
        status: status,
        priority: "none",
        user: [],
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
};
