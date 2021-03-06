import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { activeFilterContext } from "../../../App";
import useFilter from "../../../hooks/use-filter.js";

import "./ItemsGridBig.scss";

const ItemsGridBig = ({ items, page }) => {
    const filteredItems = useFilter(items);

    return (
        <ul className="items-grid-big">
            {filteredItems.map((item, index) => (
                <li className="items-grid-big__item" key={`item-${index}`}>
                    <Link
                        className="items-grid-big__item-link"
                        to={{
                            pathname: `/${item.url}`,
                            search: page,
                        }}
                        replace
                    >
                        <figure className="items-grid-big__item-figure">
                            <img
                                className="items-grid-big__item-image"
                                src={item.images.mainImage}
                                alt=""
                            />
                        </figure>
                        <p className="items-grid-big__item-title">
                            {item.title}
                        </p>
                    </Link>
                </li>
            ))}
            <li className="items-grid-big__item--not-visible"></li>
            <li className="items-grid-big__item--not-visible"></li>
            <li className="items-grid-big__item--not-visible"></li>
            <li className="items-grid-big__item--not-visible"></li>
        </ul>
    );
};

export default ItemsGridBig;
