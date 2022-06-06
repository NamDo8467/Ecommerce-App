import React, { useContext } from "react"
import CartContext from "../../CartContext"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
function Cart() {
    const { itemList } = useContext(CartContext)
    console.log(itemList)
    if (itemList.length === 0 || itemList === undefined || itemList == null) {
        return (
            <div>
                <Header />
                <div className="row align-items-center">
                    <div className="col-6">
                        <p className="mt-3" style={{ fontSize: "25px" }}>
                            Your Cart
                        </p>
                        &nbsp;
                        <h4>Looks like it's empty</h4>
                        <p>Why not add something?</p>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <h1 style={{ fontSize: "100px" }}>
                            <i className="bi bi-cart3">&nbsp;</i>
                        </h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    return <div>Cart</div>
}

export default Cart
