import React from "react"

function Footer() {
    const style = {
        listStyle: "none",
        paddingLeft: "0",
        lineHeight: "2",
        fontSize: "13px",
    }

    const margin = "m-3"
    return (
        <div className="row justify-content-between my-5 py-5">
            <div className="col-6 links d-flex justify-content-between align-items-between flex-wrap">
                <div className={"customer-service " + margin}>
                    <h6>Help & support</h6>
                    <ul style={style}>
                        <li>Contact Us</li>
                        <li>Help Centre</li>
                        <li>Returns & Exchanges</li>
                        <li>Community</li>
                        <li>Customer Service</li>
                    </ul>
                </div>

                <div className={"account " + margin}>
                    <h6>Account</h6>
                    <ul style={style}>
                        <li>Order status</li>
                        <li>Manage Account</li>
                        <li>Email Preferences</li>
                    </ul>
                </div>
                <div className={"about-us " + margin}>
                    <h6>About Us</h6>
                    <ul style={style}>
                        <li>Careers</li>
                        <li>Cooperate Information</li>
                        <li>Email Preferences</li>
                        <li>About Marketplace</li>
                        <li>Advertise With Us</li>
                    </ul>
                </div>
                <div className={"mobile-apps " + margin}>
                    <h6>Mobile Apps</h6>
                    <ul style={style}>
                        <li>
                            <i className="bi bi-apple"></i> IOS App
                        </li>
                        <li>
                            <i className="bi bi-robot"></i> Android App
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={margin + " vertical-line col-1"}
                style={{
                    borderLeft: "1px solid black",
                    width: "1px",
                }}
            ></div>
            <div className="col-4 newsletter p-0">
                <div className={margin}>
                    <h6>Be first to know</h6>
                    <p style={style}>
                        Sign up to stay in the loop about the hottest deals,
                        coolest new products, and exclusive sales events.
                    </p>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                        />
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
