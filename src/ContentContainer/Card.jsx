import React from "react"

function Card({ image, category, title, flexDirection }) {
    const width = "auto"
    const height = "100%"
    const listStyle = {
        fontSize: "13px",
        listStyle: "none",
        paddingLeft: "0px",
    }
    if (flexDirection === "column") {
        return (
            <div className="col-sm-3">
                <div className="">
                    <div className="card-body row">
                        <div className="col-7">
                            <img
                                className="card-img"
                                width={width}
                                height={height}
                                src={image}
                                alt="Card cap"
                            />
                        </div>
                        <div className="col-5">
                            <h6 className="card-title category">{category}</h6>
                            <h5 className="card-title title">{title}</h5>
                            <ul style={listStyle}>
                                <li>Hot deals</li>
                                <li>Sale up to 50%</li>
                                <li>
                                    <a href="/">View more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (flexDirection === "row") {
        return (
            <div className="col-sm-3">
                <div className="">
                    <div className="card-body row">
                        <div className="row mb-5">
                            <img
                                className="card-img"
                                width={width}
                                height={height}
                                src={image}
                                alt="Card cap"
                            />
                        </div>

                        <div className="row text-center">
                            <h6 className="card-title category">{category}</h6>
                            <h5 className="card-title title">{title}</h5>
                            <ul style={listStyle}>
                                <li>Hot deals</li>
                                <li>Sale up to 50%</li>
                                <li>
                                    <a href="/">View more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
