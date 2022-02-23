import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems }) => {
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
                        <div className="checkout-item">
                            <div className="image-container">
                                <img alt='item' src={cartItem.imageUrl}></img>
                            </div>
                            <span className="name">{cartItem.name}</span>
                            <span className="quantity">{cartItem.quantity}</span>
                            <span className="price">${cartItem.price}</span>
                            <span className="remove-button">&#10005;</span>
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

const dispatchStateToProps = {};

export default connect(mapStateToProps, dispatchStateToProps)(CheckoutPage);