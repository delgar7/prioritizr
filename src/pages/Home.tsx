import Header from "../components/Header";
import TodoCategoryRow from "../components/TodoCategoryRow";
import Footer from "../components/Footer";

const categories = ["In Review", "In Progress", "Todo", "Done", "Canceled"];

function Home() {
    return (
        <>
            <Header />
            <TodoCategoryRow categories={categories} />
            <Footer />
        </>
    );
}

export default Home;
