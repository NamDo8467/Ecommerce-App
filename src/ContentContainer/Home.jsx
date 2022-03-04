import React from "react"
import Header from "../Header/Header"
import Banner from "../ContentContainer/Banner.jsx"
import Benefits from "../ContentContainer/Benefits.jsx"
import BestSellers from "../ContentContainer/BestSellers.jsx"
import HottestOffer from "../ContentContainer/HottestOffer.jsx"
import PromotionBanner from "../ContentContainer/PromotionBanner"
import Footer from "../Footer/Footer.jsx"

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Benefits />
            <br />
            <br />
            <BestSellers />
            <br />
            <br />
            <br />
            <PromotionBanner
                text="Enjoy gaming more than ever with latest tech"
                image="images/xbox.png"
                logo="images/xbox-logo.png"
            />
            <br />
            <br />
            <br />
            <HottestOffer />
            <Footer />
        </div>
    )
}

export default Home
