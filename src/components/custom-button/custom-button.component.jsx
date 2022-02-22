import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <button
            {...otherProps}
            className={`custom-button 
                ${inverted ? 'inverted ' : ''}
                ${isGoogleSignIn ? 'google-sign-in' : ''}`}>
                {children}
        </button>
    );
}

export default CustomButton;