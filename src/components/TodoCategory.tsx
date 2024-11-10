import React from "react";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";

interface TodoCategoryProps {
    value: string;
    onChange: (
        event: SelectChangeEvent<string>,
        child: React.ReactNode
    ) => void;
}

export const categoryEmojis: { [key: string]: string } = {
    Todo: "📝",
    "In Progress": "⚒️",
    "In Review": "🔍",
    Done: "✅",
    Canceled: "❌",
};

function TodoCategory({ value, onChange }: TodoCategoryProps) {
    return (
        <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
            <Select
                className="emoji-select"
                value={value}
                onChange={onChange}
                renderValue={(selected) => (
                    <span className="px-2 py-2 transition-colors duration-200 border rounded-lg shadow-sm dark:hover:bg-slate-600 dark:bg-darkBackground emoji bg-slate-50 border-slate-300 hover:bg-slate-200 focus:outline-none">
                        {categoryEmojis[selected as string]}
                    </span>
                )}
                displayEmpty
            >
                <MenuItem value="Todo">📝 Todo</MenuItem>
                <MenuItem value="In Progress">⚒️ In Progress</MenuItem>
                <MenuItem value="In Review">🔍 In Review</MenuItem>
                <MenuItem value="Done">✅ Done</MenuItem>
                <MenuItem value="Canceled">❌ Canceled</MenuItem>
            </Select>
        </FormControl>
    );
}

export default TodoCategory;
