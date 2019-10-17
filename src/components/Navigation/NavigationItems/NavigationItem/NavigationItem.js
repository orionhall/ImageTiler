import React from 'react'

const NavigationItem = (props) => (
    <button id={props.navPurpose} className={props.navPurpose}>
        {props.buttonTitle}
    </button>
);

export default NavigationItem;
