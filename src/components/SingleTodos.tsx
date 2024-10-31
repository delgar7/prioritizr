import { useState } from "react";
import TodoPrio from "./TodoPrio";
import TodoUser from "./TodoUser";
import TodoCategory from "./TodoCategory";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Divider, useTheme, useMediaQuery } from "@mui/material";

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
    const [isTitleEmpty, setIsTitleEmpty] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleTitleChange: React.FocusEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = (event) => {
        const newTitle = event.target.value || "";
        setEditTitle(newTitle);
        onTitleChange(index, newTitle);
        setIsTitleEmpty(newTitle.trim() === "");
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
        <li className="relative flex flex-col items-center justify-center gap-8 pt-3 mb-10 sm:flex-row sm:mb-0">
            <div className="flex flex-row items-center">
                <TodoCategory onChange={handleStatusChange} value={status} />
                <TodoPrio onChange={handlePriorityChange} value={priority} />
            </div>
            <TextField
                label="Title"
                className="font-medium cursor-pointer todo-title"
                value={editTitle}
                onBlur={handleTitleChange}
                autoFocus
                onChange={(event) => setEditTitle(event.target.value)}
                size="small"
                sx={{
                    width: {
                        xl: 300,
                        lg: 240,
                        sm: 120,
                        xs: 100,
                    },
                    minWidth: "100px",
                    "@media (max-width: 1270px)": {
                        width: 210,
                    },
                    "@media (max-width: 1180px)": {
                        width: 180,
                    },
                }}
                InputLabelProps={{
                    className: "dark:text-slate-500",
                }}
                InputProps={{
                    classes: {
                        input: "dark:text-slate-300",
                    },
                }}
                error={isTitleEmpty}
            />

            {/* Conditional Divider - Vertical for desktop, Horizontal for mobile */}
            {!isMobile && (
                <Divider
                    orientation="vertical"
                    flexItem
                    className="h-12 mx-4 border-l border-gray-300"
                />
            )}
            {isMobile && (
                <Divider
                    orientation="horizontal"
                    flexItem
                    className="w-full h-px my-4 border-t border-gray-300"
                />
            )}

            {/* Select User (Assignee) */}
            <TodoUser onChange={handleUserChange} value={user} />
        </li>
    );
}

export default SingleTodo;
