import React from "react"
import { Link } from "react-router-dom"
function Error() {
    return (
        <div>
            The page you are looking for is unavailable{" "}
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Error
