import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from '../collection-item/collection-item.component';
import './collection.styles.scss';

const Collection = ({ collection, category }) => {
    console.log(collection);
    return (
        <div className="collection-page">
            <h2 className="title">{category.toUpperCase()}</h2>
            <div className="items">
                {
                    collection.items.map(item => {
                        return (
                            <CollectionItem key={item.id} item={item}></CollectionItem>
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.category)(state)
    }
};

export default connect(mapStateToProps)(Collection);