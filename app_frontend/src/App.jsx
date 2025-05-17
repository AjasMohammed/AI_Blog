import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import BlogList from "./pages/BlogList/BlogList";
import Footer from "./Components/BlogCard/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <header className="w-full sticky top-0 z-10 subpixel-antialiased">
                <NavBar />
            </header>
            <main className="w-full subpixel-antialiased pb-6 bg-primary">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:uid" element={<BlogDetail />} />
                    <Route path="/blog/all/" element={<BlogList />} />
                </Routes>
            </main>
            <footer className="h-100 bg-ternary text-primary">
                <Footer />
            </footer>
        </>
    );
}

export default App;
