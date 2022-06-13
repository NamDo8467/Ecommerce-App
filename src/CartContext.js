import { createContext, useState } from "react"

const CartContext = createContext()

export default CartContext

export function CartProvider({ children }) {
    //Each item in the itemList is an array with 2 elements: {the item information} and {quantity}
    const [itemList, setItemList] = useState([])

    const addItemToCart = item => {
        const product = itemList.find(product => product[0].title === item.title)
        let itemListClone = [...itemList] // make a copy of itemList
        if (product === undefined) {
            setItemList(prevItemList => [...prevItemList, [item, { quantity: 1 }]])
        } else {
            itemListClone[itemList.findIndex(product => product[0].title === item.title)][1].quantity += 1
            setItemList(itemListClone)
        }
    }
    const deleteItemFromCart = item => {
        let itemListClone = [...itemList] // make a copy of itemList

        itemListClone[itemList.findIndex(product => product[0].title === item.title)][1].quantity -= 1
        setItemList(itemListClone)
    }

    const removeItemFromCart = item => {
        let itemListClone = [...itemList] // make a copy of itemList

        const index = itemListClone.findIndex(product => product[0].title === item.title)

        itemListClone.splice(index, 1)
        setItemList(itemListClone)
    }
    return (
        <CartContext.Provider value={{ itemList, addItemToCart, deleteItemFromCart, removeItemFromCart  }}>
            {children}
        </CartContext.Provider>
    )
}
