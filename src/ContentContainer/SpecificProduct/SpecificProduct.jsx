import React, { useEffect, useState, useRef, useContext } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import CartContext from "../../CartContext"

function SpecificProduct() {
    let params = useParams()
    const SAVE_PRICE = 5.95 // This number is not picked on purpose, it's just a random number to make the final answer looks good
    const height = "auto"
    const imageRef = useRef()
    let date = new Date()
    const { addItemToCart } = useContext(CartContext)

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

    const [product, setProduct] = useState(null)
    useEffect(() => {
        ;(async () => {
            let result = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            let data = await result.json()
            setProduct(data)
            if (imageRef.current.width > 500) {
                imageRef.current.style.width = "60%"
            }
        })()
        return () => {
            setProduct(null)
        }
    }, [params.productId])
    if (!product) {
        return (
            <div>
                <Header />
                <Loading>Loading the product...</Loading>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <Header />
            <br />
            <h2>{product.title}</h2>
            <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <hr />
            <br />
            <div className="container d-flex">
                <div className="row w-100">
                    <div className="image-container col-8 text-center">
                        <img ref={imageRef} src={product.image} alt="product" height={height} />
                    </div>
                    <div className="price-offer-add-to-cart col-4 d-flex flex-column">
                        <div className="price-container row flex-column">
                            <div className="col price">
                                <span style={{ color: "#c21313" }}>Save ${(product.price * 10) / 100 + SAVE_PRICE}</span>
                                <h1 className="text-danger" style={{ fontWeight: "bold" }}>
                                    ${product.price}
                                </h1>
                                <p className="text-muted">
                                    SALE ends: {getMonthInitials()} {date.getDate()}, {date.getFullYear()}
                                </p>
                            </div>
                        </div>

                        <div className="add-to-cart-container row flex-column py-5 border align-tems-center">
                            <button className="btn btn-warning col-11 py-3 text-center" onClick={() => addItemToCart(product)}>
                                Add to cart
                            </button>
                            <br />
                            <button className="btn btn-primary col-11 py-3 text-center ">Pick up at store</button>
                            <br />
                            <p className="h6">
                                <i className="bi bi-truck h5"></i>&nbsp; Available to ship
                            </p>
                            <p>This will be delivered as early as tomorrow</p>
                            <br />
                            <p className="h6">
                                <i className="bi bi-shop"></i>&nbsp; Free pick up at store
                            </p>
                            <p>In-stock: {Math.floor(product.rating.count)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SpecificProduct
