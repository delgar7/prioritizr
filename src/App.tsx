import { useTheme } from "./context/DarkModeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";

function App() {
    const { darkMode } = useTheme();

    return (
        <div
            className={`pt-0 pr-5 pb-5 pl-5 ${
                darkMode ? "dark bg-darkBackground" : "bg-white"
            }`}
        >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    );
}

function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default WrappedApp;
