import React, { useContext, useState } from "react"
import CartContext from "../../CartContext"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import "./Cart.css"
function Cart() {
    const { itemList, addItemToCart, deleteItemFromCart, removeItemFromCart } = useContext(CartContext)
    const SAVE_PRICE = 5.95
    let date = new Date()
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)
    const getMonthInitials = () => {
        switch (date.getMonth()) {
            case 0:
                return "Jan"
            case 1:
                return "Feb"
            case 2:
                return "Mar"
            case 3:
                return "Apr"
            case 4:
                return "May"
            case 5:
                return "Jun"
            case 6:
                return "Jul"
            case 7:
                return "Aug"
            case 8:
                return "Sep"
            case 9:
                return "Oct"
            case 10:
                return "Nov"
            case 11:
                return "Dec"

            default:
                break
        }
    }

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
    let totalPrice = 0
    itemList.forEach(item => {
        totalPrice += item[0].price * item[1].quantity
    })

    const increaseQuantity = item => {
        addItemToCart(item)
    }

    return (
        <div>
            <Header />
            <div className="row">
                <section className="product-information col-9">
                    {itemList.map(item => {
                        // setTotal(prevTotal => prevTotal + item[0].price)
                        return (
                            <div key={item[0].id} className="product pb-3 d-flex pt-3 border justify-content-center flex-wrap">
                                <img className="col-2 me-5" src={item[0].image} alt="product" />
                                <p className="col-7">{item[0].title}</p>
                                <div className="col-2 price">
                                    <span style={{ fontSize: "13px", color: "#c21313", fontWeight: "bold" }}>
                                        SAVE ${(item[0].price * 10) / 100 + SAVE_PRICE}
                                    </span>
                                    <h5 className="text-danger" style={{ fontWeight: "bold" }}>
                                        ${item[0].price}
                                    </h5>
                                    <p className="text-muted" style={{ fontSize: "13px" }}>
                                        SALE ends: {getMonthInitials()} {date.getDate()}, {date.getFullYear()}
                                    </p>
                                </div>
                                <div className="quantity-setter col-4">
                                    {item[1].quantity == 1 ? (
                                        <button className="btn btn-dark p-1 disabled">
                                            <i className="bi bi-dash"></i>
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-dark p-1"
                                            onClick={() => {
                                                deleteItemFromCart(item[0])
                                            }}
                                        >
                                            <i className="bi bi-dash"></i>
                                        </button>
                                    )}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {item[1].quantity}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button
                                        className="btn btn-primary p-1"
                                        onClick={() => {
                                            addItemToCart(item[0])
                                        }}
                                    >
                                        <i className="bi bi-plus"></i>
                                    </button>
                                    <br />
                                    <br />
                                    <div>
                                        <i
                                            className="bi bi-trash3"
                                            onClick={() => {
                                                removeItemFromCart(item[0])
                                            }}
                                        >
                                            &nbsp; <p style={{display: "inline" }}>Remove</p>
                                        </i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <h5>Product Total: ${totalPrice}</h5>
                </section>

                <section className="order-summary col-4"></section>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
