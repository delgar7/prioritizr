import Header from "./components/Header";
import TodoCategoryRow from "./components/TodoCategoryRow";
import { useTheme } from "./context/DarkModeContext";
import Footer from "./components/Footer";

function App() {
  const { darkMode } = useTheme();
  const categories = ["In Review", "In Progress", "Todo", "Done", "Canceled"];

  return (
    <div
      className={`app--wrapper p-5 ${
        darkMode ? "dark bg-slate-700" : "bg-slate-200"
      }`}
    >
      <Header />
      <TodoCategoryRow categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
