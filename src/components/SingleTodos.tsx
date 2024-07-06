import { useState } from "react";

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
  const [editTitle, setEditTitle] = useState(title);

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
    <li className="pt-3 relative">
      <select
        className="font-bold h-8 w-40 rounded border-2 text-gray-600 hover:border-gray-400 focus:outline-none"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="Todo">📥 Todo</option>
        <option value="In Progress">🏃 In Progress</option>
        <option value="In Review">🙇 In Review</option>
        <option value="Done">☑️ Done</option>
        <option value="Canceled">🗑 Canceled</option>
      </select>
      <span
        className="todo-title font-medium pl-4 cursor-pointer dark:text-gray-400"
        contentEditable="true"
        onBlur={handleTitleChange}
      >
        {editTitle}
      </span>
    </li>
  );
}

export default SingleTodo;
