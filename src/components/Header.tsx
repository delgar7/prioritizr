import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-3 bg-slate-300 dark:bg-slate-800">
      <Link to="/">
        <h1 className="text-4xl font-bold dark:text-gray-400 font-mono pb-5">
          Todo App by Delgar7 👋≧◉ᴥ◉≦
        </h1>
      </Link>
      <nav className="flex pt-3">
        <ThemeToggle />
        <Link
          to="/users"
          className="text-slate-800 dark:text-slate-300 border-2 p-2 rounded mx-5 hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          Users
        </Link>
      </nav>
    </header>
  );
}

export default Header;
