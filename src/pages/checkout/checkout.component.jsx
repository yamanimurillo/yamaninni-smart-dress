import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, clearItem, addItemToCart, removeItemFromCart }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem => {
                    return (
                        <div className="checkout-item" key={cartItem.id}>
                            <div className="image-container">
                                <img alt='item' src={cartItem.imageUrl}></img>
                            </div>
                            <span className="name">{cartItem.name}</span>
                            <span className="quantity">
                                <div className="arrow" onClick={() => {
                                    removeItemFromCart(cartItem);
                                }}>&#10094;</div>
                                <span className="value">{cartItem.quantity}</span>
                                <div className="arrow" onClick={() => {
                                    addItemToCart(cartItem);
                                }}>&#10095;</div>
                            </span>
                            <span className="price">${cartItem.price}</span>
                            <span className="remove-button" onClick={() => {
                                clearItem(cartItem);
                            }}>&#10005;</span>
                        </div>
                    );
                })
            }

            <div className="total">
                <span>TOTAL: ${cartItems.reduce((accumulated, item) => {
                    return accumulated + (item.price * item.quantity)
                }, 0)}
                </span>
            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch) => {
    return {
        clearItem: item => dispatch(clearItemFromCart(item)),
        addItemToCart: item => dispatch(addItem(item)),
        removeItemFromCart: item => dispatch(removeItem(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);