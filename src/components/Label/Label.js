import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
function Label({htmlFor, label, required}) {
    return (
        <label style={{display: 'block'}} htmlFor={htmlFor}>
             { required && <span style={{color: 'red'}}> *</span> } {label}
        </label>
    )
}

Label.propTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterisk after label if true */
    required: PropTypes.bool
};

export default Label;