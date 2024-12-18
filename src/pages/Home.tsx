import { useState, useEffect } from "react";
import Header from "../components/Header";
import TodoCategoryRow from "../components/TodoCategoryRow";
import WelcomeSection from "../components/WelcomeSection";
import NewTask from "../components/NewTask";
import { categoryEmojis } from "../components/TodoCategory";

const categories: string[] = [
    "In Review",
    "In Progress",
    "Todo",
    "Done",
    "Canceled",
];

interface ITodo {
    id: number;
    title: string;
    status: string;
    priority: string;
    user: string[];
}

interface IStatusCounts {
    [key: string]: number;
}

function Home() {
    const storedTodos = localStorage.getItem("todos");
    const initialTodos: ITodo[] = storedTodos ? JSON.parse(storedTodos) : [];

    const [todos, setTodos] = useState<ITodo[]>(initialTodos);
    const [statusCounts, setStatusCounts] = useState<IStatusCounts>({
        "In Review": 0,
        "In Progress": 0,
        Todo: 0,
        Done: 0,
        Canceled: 0,
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Function to receive counts from TodoCategoryRow
    const handleStatusCountsChange = (counts: IStatusCounts) => {
        setStatusCounts(counts);
    };

    return (
        <>
            <Header />
            <WelcomeSection />

            <div className="grid min-h-screen grid-cols-1 gap-8 p-8 pt-0 md:grid-cols-3">
                {/* Left side of the page - 70% */}
                <div className="flex flex-col space-y-10 md:col-span-2">
                    <NewTask todos={todos} setTodos={setTodos} />
                    <TodoCategoryRow
                        categories={categories}
                        todos={todos}
                        setTodos={setTodos}
                        onStatusCountsChange={handleStatusCountsChange}
                    />
                </div>
                {/* Right Side - Takes up 30% on medium screens and above */}
                <div className="p-5 rounded-lg bg-primary max-h-[540px] overflow-hidden dark:bg-darkHeading">
                    <h2 className="flex items-center justify-between pb-10">
                        <span className="text-lg font-semibold text-gray-700 dark:text-darkText">
                            Task Progress
                        </span>
                        <span className="text-xl">📶</span>
                    </h2>
                    <ul className="space-y-5">
                        {categories.map((category) => (
                            <li
                                key={category}
                                className="flex items-center justify-between p-3 py-5 text-lg bg-white rounded-md shadow-sm dark:text-darkText dark:bg-darkBackground"
                            >
                                <span>
                                    {categoryEmojis[category]} {category}
                                </span>
                                <span>{statusCounts[category]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
