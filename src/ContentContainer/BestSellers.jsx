import React from "react"
// import Loading from "./Loading"
import Card from "./Card"
import CardContainer from "./CardContainer"
function BestSellers() {
    // const [bestSellerProducts, setBestSellerProducts] = useState([])

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const result = await fetch("https://fakestoreapi.com/products")
    //         const data = await result.json()
    //         setBestSellerProducts(data)
    //     }
    //     fetchProducts()
    // }, [])
    const FLEX_DIRECTION = "column";
    return (
        <div className="ms-5 mt-5">
            <h3 className="">Best Sellers</h3>
            <CardContainer>
                <Card image="images/phone.png" category="Electronics" title = 'Phone' flexDirection={FLEX_DIRECTION}/>
                <Card image="images/kitchen-appliance.png" category="Kitchen" title="Appliance" flexDirection={FLEX_DIRECTION}/>
                <Card image="images/clothing.png" category="Clothing" title="Clothes" flexDirection={FLEX_DIRECTION}/>
                <Card image="images/ps5.png" category="Gaming" title="PS5" flexDirection={FLEX_DIRECTION}/>
            </CardContainer>
        </div>
    )
}

export default BestSellers
