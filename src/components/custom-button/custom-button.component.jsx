import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button
            {...otherProps}
            className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}>
                {children}
        </button>
    );
}

export default CustomButton;