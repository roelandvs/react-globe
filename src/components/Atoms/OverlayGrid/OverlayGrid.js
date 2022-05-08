import React from "react";

import ExampleImageOne from "../../../img/example-1.jpg";
import ExampleImageTwo from "../../../img/example-2.jpg";
import ExampleImageThree from "../../../img/example-3.jpg";

import "./OverlayGrid.scss";

const OverlayGrid = () => {
    return (
        <ul className="overlay-grid">
            <li className="overlay-grid__item">
                <figure className="overlay-grid__item-figure">
                    <img
                        className="overlay-grid__item-image"
                        src={ExampleImageOne}
                        alt=""
                    />
                </figure>
                <p className="overlay-grid__item-title">
                    Pijltje can Mondriaan
                </p>
            </li>
            <li className="overlay-grid__item">
                <figure className="overlay-grid__item-figure">
                    <img
                        className="overlay-grid__item-image"
                        src={ExampleImageTwo}
                        alt=""
                    />
                </figure>
                <p className="overlay-grid__item-title">
                    Pijltje can Mondriaan
                </p>
            </li>
            <li className="overlay-grid__item">
                <figure className="overlay-grid__item-figure">
                    <img
                        className="overlay-grid__item-image"
                        src={ExampleImageTwo}
                        alt=""
                    />
                </figure>
                <p className="overlay-grid__item-title">
                    Pijltje can Mondriaan
                </p>
            </li>
        </ul>
    );
};

export default OverlayGrid;
