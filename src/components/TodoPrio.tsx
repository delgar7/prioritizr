import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { SelectChangeEvent } from "@mui/material/Select";

interface ITodoPrios {
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}

function TodoPrio({ value, onChange }: ITodoPrios) {
  return (
    <FormControl sx={{ m: 0, minWidth: 130 }} size="small">
      <Select value={value} onChange={onChange}>
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
