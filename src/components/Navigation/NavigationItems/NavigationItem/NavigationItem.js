import React from 'react'

const NavigationItem = (props) => (
    <li className='navigationItem'>
        <a href={props.link} className="activeLink">
            {props.children}
        </a>
    </li>
);

export default NavigationItem;
