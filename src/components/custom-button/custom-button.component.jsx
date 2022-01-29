import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button
            {...otherProps}
            className={`custom-button ${otherProps.isGoogleSignIn ? 'google-sign-in' : ''}`}>
                {children}
        </button>
    );
}

export default CustomButton;