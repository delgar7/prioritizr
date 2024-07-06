import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="p-3 bg-slate-300 dark:bg-slate-800">
      <h1 className="text-4xl font-bold dark:text-gray-400">Todo's</h1>
      <div className="theme--switch">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
