import React, { useState } from 'react'

const [settings, changeSettings] = useState({})

const openSettings = (e) => {

}

const SettingsButton = (props) => (
    <li onClick={openSettings} className='navigationItem'>
            {props.children}
    </li>
);

export default SettingsButton;
