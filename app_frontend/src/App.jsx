import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <header className="w-full absolute">
                <NavBar />
            </header>
            <main className="w-full">
                <Home />
            </main>
        </>
    );
}

export default App;
