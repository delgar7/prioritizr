import Switch from "@mui/material/Switch";
import { useTheme } from "../context/DarkModeContext";

const label = { inputProps: { "aria-label": "Theme Switch" } };
function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <Switch
        {...label}
        color="default"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
}

export default ThemeToggle;