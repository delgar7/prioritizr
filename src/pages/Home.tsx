import Header from "../components/Header";
import TodoCategoryRow from "../components/TodoCategoryRow";

const categories = ["In Review", "In Progress", "Todo", "Done", "Canceled"];

function Home() {
    return (
        <>
            <Header />

            <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-3">
                {/* Left side of the page - 70% */}
                <div className="md:col-span-2">
                    <TodoCategoryRow categories={categories} />
                </div>
                {/* Right Side - Takes up 30% on medium screens and above */}
                <div className="p-5 rounded-lg bg-primary max-h-[425px] overflow-hidden">
                    <h2 className="flex items-center justify-between pb-5">
                        <span className="font-semibold text-gray-700">
                            Task Progress
                        </span>
                        <span className="text-lg">📶</span>
                    </h2>
                    <ul className="space-y-5">
                        <li className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                            <span>🔍 In Review</span>
                            <span>17</span>
                        </li>
                        <li className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                            <span>⚒️ In Progress</span>
                            <span>12</span>
                        </li>
                        <li className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                            <span>📝 To Do</span>
                            <span>08</span>
                        </li>
                        <li className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                            <span>✅ Done</span>
                            <span>21</span>
                        </li>
                        <li className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
                            <span>❌ Cancelled</span>
                            <span>11</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
