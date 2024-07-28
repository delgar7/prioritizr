import { useState } from "react";
import useFocus from "../hooks/useFocus";
import TodoPrio from "./TodoPrio";
import TodoUser from "./TodoUser";
import TodoCategory from "./TodoCategory";

interface ISingleTodoProps {
  index: number;
  title: string;
  status: string;
  priority: string;
  user: string;
  onStatusChange: (index: number, newStatus: string) => void;
  onTitleChange: (index: number, newTitle: string) => void;
  onPriorityChange: (index: number, newPrio: string) => void;
  onUserChange: (index: number, newUser: string) => void;
}

function SingleTodo({
  index,
  title,
  status,
  priority,
  user,
  onStatusChange,
  onTitleChange,
  onPriorityChange,
  onUserChange,
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

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onPriorityChange(index, event.target.value);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUserChange(index, event.target.value);
  };

  return (
    <li className="relative flex pt-3">
      <TodoCategory onChange={handleStatusChange} value={status} />
      <TodoPrio onChange={handlePriorityChange} value={priority} />

      <span
        ref={focusRef}
        className="px-1 font-medium cursor-pointer todo-title dark:text-gray-400"
        contentEditable="true"
        onBlur={handleTitleChange}
      >
        {editTitle}
      </span>
      <div className="ml-auto">
        <TodoUser onChange={handleUserChange} value={user} />
      </div>
    </li>
  );
}

export default SingleTodo;