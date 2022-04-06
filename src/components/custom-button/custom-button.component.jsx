import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({children, buttonType, ...otherProps}) => (
    <button className={`custom-button ${buttonType}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;