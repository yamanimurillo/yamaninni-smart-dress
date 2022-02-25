import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { createStructuredSelector } from "reselect";
import Collection from "../../components/collection/collection.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

import "./shop.styles.scss";

const ShopPage = () => {

    let params = useParams();
    if (!params || !params.category) {
        return (
            <div className="shop-page">
                <h2>Our collections</h2>
                <CollectionsOverview></CollectionsOverview>
            </div>
        );
    } else {
        return (
            <div className="shop-page">
                <Collection category={params.category}></Collection>
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
}
);

export default connect(mapStateToProps)(ShopPage);