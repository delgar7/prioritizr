import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ITodoPrios {
    value: string;
    onChange: (
        event: SelectChangeEvent<string>,
        child: React.ReactNode
    ) => void;
}

const prioEmojis: { [key: string]: string } = {
    urgent: "🔥",
    high: "🟥",
    medium: "🟧",
    low: "🟨",
    none: "⬜️",
};

function TodoPrio({ value, onChange }: ITodoPrios) {
    return (
        <FormControl sx={{ m: 0, minWidth: 100 }} size="small">
            <Select
                className="emoji-select"
                value={value}
                onChange={onChange}
                renderValue={(selected) => {
                    return (
                        <span className="px-1 py-2 transition-colors duration-200 border rounded-lg shadow-sm bg-slate-50 border-slate-300 hover:bg-slate-200 focus:outline-none">
                            {prioEmojis[selected as string]}
                        </span>
                    );
                }}
            >
                <MenuItem value="urgent">🔥 Urgent</MenuItem>
                <MenuItem value="high">🟥 High</MenuItem>
                <MenuItem value="medium">🟧 Medium</MenuItem>
                <MenuItem value="low">🟨 Low</MenuItem>
                <MenuItem value="none">⬜️ None</MenuItem>
            </Select>
        </FormControl>
    );
}

export default TodoPrio;
