import { useState } from "react";
import TodoPrio from "./TodoPrio";
import TodoUser from "./TodoUser";
import TodoCategory from "./TodoCategory";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

interface ISingleTodoProps {
  index: number;
  title: string;
  status: string;
  priority: string;
  user: string[];
  onStatusChange: (index: number, newStatus: string) => void;
  onTitleChange: (index: number, newTitle: string) => void;
  onPriorityChange: (index: number, newPrio: string) => void;
  onUserChange: (index: number, newUser: string[]) => void;
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
  const [editTitle, setEditTitle] = useState(title);

  const handleTitleChange: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const newTitle = event.target.value || "";
    setEditTitle(newTitle);
    onTitleChange(index, newTitle);
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    onStatusChange(index, event.target.value);
  };

  const handlePriorityChange = (event: SelectChangeEvent<string>) => {
    onPriorityChange(index, event.target.value);
  };

  const handleUserChange = (event: SelectChangeEvent<string[]>) => {
    onUserChange(index, event.target.value as string[]);
  };

  return (
    <li className="relative flex pt-3">
      <TodoCategory onChange={handleStatusChange} value={status} />
      <TodoPrio onChange={handlePriorityChange} value={priority} />

      <TextField
        label="Title"
        className="todo-title font-medium cursor-pointer"
        value={editTitle}
        onBlur={handleTitleChange}
        autoFocus
        onChange={(event) => setEditTitle(event.target.value)}
        size="small"
        InputLabelProps={{
          className: "dark:text-slate-500",
        }}
        InputProps={{
          classes: {
            input: "dark:text-slate-300",
          },
        }}
      />

      <div className="ml-auto">
        <TodoUser onChange={handleUserChange} value={user} />
      </div>
    </li>
  );
}

export default SingleTodo;
