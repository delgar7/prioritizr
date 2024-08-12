// import Header from "./components/Header";
// import TodoCategoryRow from "./components/TodoCategoryRow";
// import Footer from "./components/Footer";
import { useTheme } from "./context/DarkModeContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";

function App() {
    const { darkMode } = useTheme();

    return (
        <div
            className={`p-5 ${darkMode ? "dark bg-slate-700" : "bg-slate-200"}`}
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
