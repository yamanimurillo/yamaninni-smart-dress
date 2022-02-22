import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                        return (
                            <CartItem key={cartItem.id} item={cartItem}></CartItem>
                        );
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown);