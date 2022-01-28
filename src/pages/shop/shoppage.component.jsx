import React from "react";

import SHOP_DATA from './shoppage.data.js';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

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
            <h1>SHOP NOW</h1>
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