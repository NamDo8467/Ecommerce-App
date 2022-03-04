import React from "react"

function PromotionBanner({ text, image, logo }) {
    let WIDTH,
        HEIGHT = "100%"

    const style = {
        width: WIDTH,
        height: HEIGHT,
	}
	
    return (
        <div className="container" style={{ height: "130px", backgroundColor:"#F2F2F2", fontWeight:"bolder" }}>
            <div className="row h-100">
                <div className="col-4 align-self-center fs-3 ps-5 h6">{text}</div>
                <div className="col-3 h-100 my-0 mx-auto">
                    <img src={image} alt="product" style={style} />
                </div>
                <div className="col-3 h-100">
                    <img src={logo} alt="product's logo" style={style} />
                </div>
                <div className="col-2 align-self-center">
                    <a href="/" className="btn btn-primary">
                        Shop now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PromotionBanner
