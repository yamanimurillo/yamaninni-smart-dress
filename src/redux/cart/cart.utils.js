
//Functions related to our cart redux state

export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id
    });

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        });
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id
    });

    if (existingCartItem) {

        if (existingCartItem.quantity === 1) {
            return clearItemFromCart(cartItems, cartItemToRemove);
        } else {

            return cartItems.map(cartItem => {
                return cartItem.id === cartItemToRemove.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            });
        }
    }

    return [...cartItems];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => { return cartItem.id !== cartItemToClear.id });
};