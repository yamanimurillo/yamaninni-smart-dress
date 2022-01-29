import React from "react";

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                {...otherProps}
                onChange={handleChange}
                autoComplete="off">
            </input>
            <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                {label}
            </label>
        </div>
    );
};

export default FormInput;