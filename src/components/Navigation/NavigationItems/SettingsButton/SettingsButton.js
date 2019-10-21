import React from 'react'

const SettingsButton = (props) => {
    return (<li onClick={props.toggleModalHandler} className='navigationItem'>
            Settings
    </li>)
};

export default SettingsButton;
