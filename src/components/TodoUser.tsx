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
        <FormControl sx={{ m: 0, minWidth: 100 }} size="small">
            <InputLabel sx={{ display: "none" }}>Assignee</InputLabel>
            <Select
                className="dark:text-slate-300"
                value={Array.isArray(value) ? value : []}
                onChange={onChange}
                multiple
                sx={{
                    width: {
                        xl: 300,
                        lg: 240,
                        sm: 120,
                        xs: 100,
                    },
                    "@media (max-width: 1270px)": {
                        width: 210,
                    },
                    "@media (max-width: 1180px)": {
                        width: 180,
                    },
                }}
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
