import { createSelector } from "reselect";

const selectUser = (state) => {
    return state.user;
}

const selectCart = (state) => {
    return state.cart;
}

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hiddenDropdown
);