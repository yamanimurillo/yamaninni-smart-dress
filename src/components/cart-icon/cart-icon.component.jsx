import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems, selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, cartItems, cartItemsCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{cartItemsCount}</span>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state),
        cartItemsCount: selectCartItemsCount(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);