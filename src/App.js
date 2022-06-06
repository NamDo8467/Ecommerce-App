import Home from "./ContentContainer/Home"
import All from "./ContentContainer/All/All"
import Error from "./ContentContainer/Error"
import { Routes, Route } from "react-router-dom"
import SpecificProduct from "./ContentContainer/SpecificProduct/SpecificProduct.jsx"
import Category from "./ContentContainer/Category/Category.jsx"
import LayoutOfCategory from "./ContentContainer/Category/LayoutOfCategory"
import { CartProvider } from "../src/CartContext"
import Cart from "./ContentContainer/Cart/Cart"

function App() {
    
    return (
        <CartProvider>
            <div className="App container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="all" element={<All />} />
                    <Route path="category" element={<Category />}>
                        <Route path="electronics" element={<LayoutOfCategory category="electronics" />} />
                        <Route path="jewelery" element={<LayoutOfCategory category="jewelery" />} />
                        <Route path="menclothing" element={<LayoutOfCategory category="men's clothing" />} />
                        <Route path="womenclothing" element={<LayoutOfCategory category="women's clothing" />} />
                    </Route>

                    <Route path="cart" element={<Cart />} />
                    <Route path="product/:productId" element={<SpecificProduct />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </CartProvider>
    )
}

export default App
