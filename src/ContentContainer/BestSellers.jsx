import React from "react"
// import Loading from "./Loading"
import PromotionCard from "./PromotionCard"
import CardContainer from "./CardContainer"
function BestSellers() {
    const FLEX_DIRECTION = "column";
    return (
        <div className="ms-5 mt-5">
            <h3 className="">Best Sellers</h3>
            <CardContainer>
                <PromotionCard image="images/phone.png" category="Electronics" title = 'Phone' flexDirection={FLEX_DIRECTION}/>
                <PromotionCard image="images/kitchen-appliance.png" category="Kitchen" title="Appliance" flexDirection={FLEX_DIRECTION}/>
                <PromotionCard image="images/clothing.png" category="Clothing" title="Clothes" flexDirection={FLEX_DIRECTION}/>
                <PromotionCard image="images/ps5.png" category="Gaming" title="PS5" flexDirection={FLEX_DIRECTION}/>
            </CardContainer>
        </div>
    )
}

export default BestSellers
