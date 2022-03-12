import React, { useState, useEffect } from "react"
import Loading from "../Loading"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import ProductCard from "../ProductCard/ProductCard"
import FilterBar from "../FilterBar/FilterBar"

function AllProductsContainer() {
    const [productList, setProductList] = useState(null)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")

    const [category, setCategory] = useState("all")

    useEffect(() => {
        ;(async () => {
            try {
                const result = await fetch("https://fakestoreapi.com/products")
                const data = await result.json()
                setProductList(data)
            } catch (error) {
                setLoadingMessage("Can not load data")
                console.log(error)
            }
        })()

        return () => {
            setProductList(null)
            setLoadingMessage("Loading...")
        }
    }, [])
    if (!productList) {
        return (
            <div>
                <Header />
                <Loading>{loadingMessage}</Loading>
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className="row d-flex">
                <FilterBar className="col-3 p-5" setCategory={setCategory} />
                <div className="col-9 row  justify-content-center align-items-center">
                    {category === "all"
                        ? productList.map(product => {
                              return (
                                  <ProductCard
                                      key={product.id}
                                      image={product.image}
                                      description={product.title}
                                      price={product.price}
                                      id={product.id}
                                  />
                              )
                          })
                        : productList
                              .filter(product => {
                                  return product.category === category
                              })
                              .map(product => {
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
            <Footer />
        </div>
    )
}

export default AllProductsContainer
