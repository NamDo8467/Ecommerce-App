import React from "react"
import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <div className="search d-flex justify-content-between py-3">
                <img className="navbar-brand col-6" src="/sfh.jpg" alt="logo" />
                <form className="d-flex col-3 pe-3">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                        Search
                    </button>
                </form>
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
                    <div
                        className="collapse navbar-collapse d-flex justify-content-center"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="electronics">
                                    Electronics
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="jewelry">
                                    Jewelry
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="menclothing">
                                    Men's clothing
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="womenclothing">
                                    Women's clothing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
