import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../CartContext"

function Header() {
    const { itemList } = useContext(CartContext)
    let totalItemInList = 0
    itemList.forEach(item => {
        totalItemInList += item[1].quantity
    })
    return (
        <header>
            <div className="search d-flex justify-content-between py-3">
                <img className="navbar-brand col-6" src="/sfh.jpg" alt="logo" />
                <form className="d-flex col-3 pe-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">
                        Search
                    </button>
                </form>
                <Link className="nav-link" to="/cart">
                    <h4>
                        <i className="bi bi-bag-fill" style={{ color: "black", fontStyle: "normal" }}>
                            &nbsp; &nbsp;
                            <span>{totalItemInList}</span>
                        </i>
                    </h4>
                </Link>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className="nav-link" to="/">
                                <li className="nav-item mx-3">Home</li>
                            </Link>

                            <Link className="nav-link" to="/category/electronics">
                                <li className="nav-item mx-3">Electronics</li>
                            </Link>
                            <Link className="nav-link" to="/category/jewelery">
                                <li className="nav-item mx-3">Jewelry</li>
                            </Link>
                            <Link className="nav-link" to="/category/menclothing">
                                <li className="nav-item mx-3">Men's clothing</li>
                            </Link>
                            <Link className="nav-link" to="/category/womenclothing">
                                <li className="nav-item mx-3">Women's clothing</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
