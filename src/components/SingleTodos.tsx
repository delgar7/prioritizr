import { useState } from "react";
import useFocus from "../hooks/useFocus";
import TodoPrio from "./TodoPrio";

interface ISingleTodoProps {
  index: number;
  title: string;
  status: string;
  onStatusChange: (index: number, newStatus: string) => void;
  onTitleChange: (index: number, newTitle: string) => void;
}

function SingleTodo({
  index,
  title,
  status,
  onStatusChange,
  onTitleChange,
}: ISingleTodoProps) {
  // Hooks
  const [editTitle, setEditTitle] = useState(title);
  const focusRef = useFocus();

  const handleTitleChange = (event: React.ChangeEvent<HTMLSpanElement>) => {
    // 💡 [TODO] Add validation to prevent/warn empty strings within the editable fields
    const newTitle = event.target.textContent || "";
    setEditTitle(newTitle);
    onTitleChange(index, newTitle);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(index, event.target.value);
  };

  return (
    <li className="relative pt-3 flex">
      <select
        className="w-40 h-8 mr-4 font-bold text-gray-600 border-2 rounded hover:border-gray-400 focus:outline-none"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="Todo">📥 Todo</option>
        <option value="In Progress">🏃 In Progress</option>
        <option value="In Review">🙇 In Review</option>
        <option value="Done">☑️ Done</option>
        <option value="Canceled">🗑 Canceled</option>
      </select>
      <TodoPrio />
      <span
        ref={focusRef}
        className="px-1 font-medium cursor-pointer todo-title dark:text-gray-400"
        contentEditable="true"
        onBlur={handleTitleChange}
      >
        {editTitle}
      </span>
    </li>
  );
}

export default SingleTodo;
