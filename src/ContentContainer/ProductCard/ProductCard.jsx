import React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"
function ProductCard({ image, description, price, id }) {
    const width = "50%"
    const height = "auto"
    const StandardLengthForDescription = 38

    if (description.length > StandardLengthForDescription) {
        description = description.slice(0, 38)
    }
    
    return (
        <div className="col-sm-3">
            <div className="d-flex flex-column p-5">
                <div className="row mb-5">
                    <img
                        className="card-img"
                        width={width}
                        height={height}
                        src={image}
                        alt="Card cap"
                    />
                </div>

                <div className="row">
                    <Link
                        className="text-decoration-none text-black description"
                        to={`/product/${id}`}
                    >
                        {description}
                        <span className="text-danger">...See more</span>
                    </Link>
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
