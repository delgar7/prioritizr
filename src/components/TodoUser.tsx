import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useUsers } from "../context/UsersContext";

interface ITodoUser {
    value: string[];
    onChange: (event: SelectChangeEvent<string[]>) => void;
}

function TodoUser({ value, onChange }: ITodoUser) {
    const { users } = useUsers();

    return (
        <FormControl sx={{ m: 0, minWidth: 250 }} size="small">
            <InputLabel sx={{ display: "none" }}>Assignee</InputLabel>
            <Select
                className="dark:text-slate-300"
                value={Array.isArray(value) ? value : []}
                onChange={onChange}
                multiple
                renderValue={(selected) =>
                    Array.isArray(selected) &&
                    (selected as string[]).length === 0 ? (
                        <p>None</p>
                    ) : Array.isArray(selected) ? (
                        (selected as string[]).join(", ")
                    ) : (
                        ""
                    )
                }
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
                <MenuItem value="" disabled>
                    Select Assignee
                </MenuItem>
                {users.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default TodoUser;
