import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ITodoUser {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
}

const names = ["None", "Emma", "Michael", "Olivea", "Omar"];

function TodoUser({ value, onChange }: ITodoUser) {
  return (
    <FormControl sx={{ m: 0, minWidth: 250 }} size="small">
      <InputLabel sx={{ display: "none" }}>Assignee</InputLabel>{" "}
      <Select
        className="dark:text-slate-300"
        value={value}
        onChange={onChange}
        multiple
        renderValue={(selected) =>
          (selected as string[]).length === 0 ? (
            <em>Select Assignee</em>
          ) : (
            (selected as string[]).join(", ")
          )
        }
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="" disabled>
          Select Assignee
        </MenuItem>{" "}
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TodoUser;
