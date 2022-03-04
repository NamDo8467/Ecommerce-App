import React from "react"
import bannerImage1 from "../images/banner-2.png"
import { Link } from "react-router-dom"
function Banner() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary">
            <div className="headline col-4">
                <h2>
                    Find the best offers from our latest sales, all in one place
                </h2>
                <Link to="/all" className="btn btn-light">
                    Shop now
                </Link>
            </div>

            <div className="banner-image">
                <img src={bannerImage1} alt="banner" />
            </div>
        </div>
    )
}

export default Banner
