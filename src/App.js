// import Footer from "./Footer/Footer.jsx"
import Home from "./ContentContainer/Home"
import All from "./ContentContainer/All/All"
import Error from "./ContentContainer/Error"
import { Routes, Route } from "react-router-dom"
import Product from "./ContentContainer/Product"
function App() {
    return (
        <div className="App container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="all" element={<All />} >
                    {/* Using Route when filtering */}
                    {/* <Route path="" element={<All/>}/> */}
                </Route>
                <Route path="/product/:productId" element={<Product />}/>
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App
