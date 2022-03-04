import Footer from "./Footer/Footer.jsx"
import Home from "./ContentContainer/Home"
import {Routes, Route } from "react-router-dom"
function App() {
    return (
        <div className="App container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="all" element={<Footer />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
