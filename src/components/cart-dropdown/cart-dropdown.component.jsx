import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
    const navigate = useNavigate();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length === 0 ?
                        <span className="empty-message">Your cart is empty</span> :
                        cartItems.map(cartItem => {
                            return (
                                <CartItem key={cartItem.id} item={cartItem}></CartItem>
                            );
                        })
                }
            </div>
            <CustomButton onClick={() => {
                toggleCartHidden();
                navigate('/checkout');
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

/*const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}*/

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);