import { createSelector } from 'reselect';

const selectCart = (state) => {
    return state.cart;
};

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => {
        return cart.cartItems
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((accumulatedQuantity, cartItem) => {
            return accumulatedQuantity + cartItem.quantity
        }, 0);
    }
);