import { createContext, useState } from "react"

const CartContext = createContext()

export default CartContext

export function CartProvider({ children }) {
	const [itemList, setItemList] = useState([])
	
	const addItemToCart = (item) => {
		setItemList((prevItemList)=> [...prevItemList, item])
	}
    return <CartContext.Provider value={{itemList, addItemToCart}}>{children}</CartContext.Provider>
}
