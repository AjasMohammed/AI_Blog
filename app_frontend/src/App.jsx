import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <header className="w-full sticky top-0 z-10">
                <NavBar />
            </header>
            <main className="w-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:uid" element={<BlogDetail />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
