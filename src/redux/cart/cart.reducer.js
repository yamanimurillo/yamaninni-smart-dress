import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    hiddenDropdown: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hiddenDropdown: !state.hiddenDropdown
            };
        default: 
            return state;
    }
}

export default cartReducer;