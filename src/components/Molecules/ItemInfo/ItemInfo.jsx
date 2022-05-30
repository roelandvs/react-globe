import React from "react";

import ItemSizeWeight from "../../Atoms/ItemSizeWeight/ItemSizeWeight";
import ItemOptionalData from "../../Atoms/ItemOptionalData/ItemOptionalData";
import ItemLocation from "../../Atoms/ItemLocation/ItemLocation";

import "./ItemInfo.scss";

const ItemInfo = ({ itemData }) => {
    return (
        <section className="item-info">
            <div className="item-info__content">
                <div className="item-info__category">
                    <ItemLocation location={itemData.location} />
                </div>

                <div className="item-info__category">
                    <ItemSizeWeight itemSizes={itemData.data.sizes} />
                </div>

                {itemData.data.optional.map((data) => (
                    <div className="item-info__category">
                        <ItemOptionalData optionalData={data} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ItemInfo;
