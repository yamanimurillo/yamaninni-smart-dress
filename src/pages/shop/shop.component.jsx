import React from "react";

import SHOP_DATA from './shop.data.js';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./shop.styles.scss";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    };

    render() {

        const { collections } = this.state;
        return <div className="shop-page">
            <h2>Our collections</h2>
            {
                collections.map(collection => (
                    <CollectionPreview
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}>

                    </CollectionPreview>
                ))
            }
        </div>
    };
};

export default ShopPage;