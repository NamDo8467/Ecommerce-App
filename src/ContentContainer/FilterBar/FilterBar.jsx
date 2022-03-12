import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./FilterBar.css"
import Loading from "../Loading"

const FilterBar = ({ className, setCategory }) => {
    const [categoryList, setCategoryList] = useState(null)
    useEffect(() => {
        ;(async () => {
            try {
                const result = await fetch("https://fakestoreapi.com/products/categories")
                const categories = await result.json()
                setCategoryList(categories)
            } catch (error) {
                setCategoryList([])
            }
        })()
        return () => {
            setCategoryList([])
        }
    }, [])

    const handleCategoryClick = e => {
        e.preventDefault()
        setCategory(e.target.dataset['category'])
        // setCategory(e.target.value)
    }
    if (!categoryList) {
        return <Loading>Loading...</Loading>
    }
    return (
        <div className={className}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <a
                        className="text-decoration-none filter-name text-dark"
                        data-bs-toggle="collapse"
                        href="#categories"
                        aria-expanded="false"
                        aria-controls="categories"
                    >
                        Categories
                    </a>
                    <div className="collapse" id="categories">
                        <div className="card card-body">
                            <Link
                                className="text-body mb-2 text-decoration-none filter-detail"
                                data-category="all"
                                to="/"
                                onClick={handleCategoryClick}
                            >
                                All
                            </Link>
                            {categoryList.map(category => (
                                <Link
                                    className="text-body mb-2 text-decoration-none filter-detail"
                                    key={category}
                                    data-category={category}
                                    to="/"
                                    onClick={handleCategoryClick}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Link>
                            ))}
                        </div>
                    </div>
                </li>

                <li className="list-group-item">
                    <a
                        className="text-decoration-none filter-name text-dark"
                        data-bs-toggle="collapse"
                        href="#price"
                        aria-expanded="false"
                        aria-controls="price"
                    >
                        Price
                    </a>
                    <div className="collapse" id="price">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is
                            hidden by default but revealed when the user activates the relevant
                            trigger.
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FilterBar
