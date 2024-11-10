import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b-2 mb-8 border-[#E4E4E7] dark:bg-darkHeading dark:rounded-lg dark:border-none">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <Link to="/">
                    <h1 className="font-mono text-xl font-semibold dark:text-darkText">
                        Todo App by Delgar7 👋🏻
                    </h1>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-darkText dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul
                        className={`flex flex-col items-center p-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 
        ${isOpen ? "gap-2 mt-3" : ""} md:pt-0`}
                    >
                        <Link
                            to="/users"
                            className="dark:hover:text-[#E6E7EB] px-4 py-2 font-mono text-lg transition-colors duration-300 rounded-md text-slate-800 hover:bg-gray-200 dark:text-slate-300 hover:text-slate-500 dark:hover:bg-[#1E90FF]"
                        >
                            Users
                        </Link>
                        <ThemeToggle />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
