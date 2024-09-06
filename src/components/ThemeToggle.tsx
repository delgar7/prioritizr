import MaterialUISwitch from "./MaterialUISwitch";
import { useTheme } from "../context/DarkModeContext";

const label = { inputProps: { "aria-label": "Theme Switch" } };

function ThemeToggle() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <MaterialUISwitch
            {...label}
            checked={darkMode}
            onChange={toggleDarkMode}
        />
    );
}

export default ThemeToggle;
