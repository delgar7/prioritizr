import React from "react";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";

interface TodoCategoryProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}

const categoryEmojis: { [key: string]: string } = {
  "Todo": "📥",
  "In Progress": "🏃",
  "In Review": "🙇",
  "Done": "☑️",
  "Canceled": "🗑"
};

function TodoCategory({ value, onChange }: TodoCategoryProps) {
  return (
    <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
      <Select
        className="emoji-select"
        value={value}
        onChange={onChange}
        renderValue={(selected) => (
          <span className="emoji">{categoryEmojis[selected as string]}</span>
        )}
        displayEmpty
      >
        <MenuItem value="Todo">📥 Todo</MenuItem>
        <MenuItem value="In Progress">🏃 In Progress</MenuItem>
        <MenuItem value="In Review">🙇 In Review</MenuItem>
        <MenuItem value="Done">☑️ Done</MenuItem>
        <MenuItem value="Canceled">🗑 Canceled</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TodoCategory;
