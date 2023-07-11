import React from "react";
import './button.css';

function MainButtons({children, ...Attr}) {
    return (
        <button {...Attr}>{children}</button>
    )
}

export default MainButtons;