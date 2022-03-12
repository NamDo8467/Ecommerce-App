import React from 'react'
import CardContainer from './CardContainer'
import PromotionCard from './PromotionCard'
function HottestOffer() {
	const FLEX_DIRECTION = "row";
  return (
	<div className="ms-5 mt-5">
            <h3 className="">Hottest Offers</h3>
            <CardContainer>
                <PromotionCard image="images/ultrabook-laptop.png" category="Electronics" title = 'XPS 13 Laptop' flexDirection={FLEX_DIRECTION}/>
                <PromotionCard image="images/tv.png" category="Entertainment" title="Ultra Wide Televisions" flexDirection={FLEX_DIRECTION}/>
                <PromotionCard image="images/google-home.png" category="Accessories" title="Google Home" flexDirection={FLEX_DIRECTION}/>
                <PromotionCard image="images/vacuum.png" category="Gaming" title="PS5" flexDirection={FLEX_DIRECTION}/>
            </CardContainer>
        </div>
  )
}

export default HottestOffer