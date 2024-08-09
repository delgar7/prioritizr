import Header from "./components/Header";
import TodoCategoryRow from "./components/TodoCategoryRow";
import Footer from "./components/Footer";
import { useTheme } from "./context/DarkModeContext";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Users from "./pages/Users";

function App() {
  const { darkMode } = useTheme();
  const categories = ["In Review", "In Progress", "Todo", "Done", "Canceled"];
  const location = useLocation();

  return (
    <div className={`p-5 ${darkMode ? "dark bg-slate-700" : "bg-slate-200"}`}>
      {location.pathname !== "/users" && (
        <>
          <Header />
          <TodoCategoryRow categories={categories} />
          <Footer />
        </>
      )}
      <Routes>
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
