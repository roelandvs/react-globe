import React from "react";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import OverviewGrid from "../../Molecules/OverviewGrid/OverviewGrid";

import "./OverviewTemplate.scss";

const OverviewTemplate = () => {
    return (
        <div className="overview-template">
            <section className="overview-template__intro">
                <GlobeIntro />
            </section>
            <OverviewGrid />
        </div>
    );
};

export default OverviewTemplate;