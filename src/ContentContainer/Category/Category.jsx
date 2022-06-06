import React from "react"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import { Outlet } from "react-router-dom"
function Category() {
    return (
        <div>
            <Header />
            	<Outlet />
            <Footer />
        </div>
    )
}

export default Category
