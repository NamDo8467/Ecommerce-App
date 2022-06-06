import React, { useState, useEffect } from "react"
import Loading from "../Loading"
import ProductCard from "../ProductCard/ProductCard"
function LayoutOfCategory({ category }) {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        ;(async () => {
            const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            setProductList(await data.json())
        })()
        return () => {
            setProductList([])
        }
    }, [category])
    if (productList.length <= 0) {
        return (
            <div>
                <Loading>Loading {category} products...</Loading>
            </div>
        )
    }
    return (
        <div className="row d-flex">
            <div className="row  justify-content-center align-items-center">
                {productList.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            description={product.title}
                            price={product.price}
                            id={product.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default LayoutOfCategory
