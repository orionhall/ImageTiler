import React, { useState } from 'react'
import { getFlickrData } from '../../../../actions/getFlickrData';

const openSettings = (e) => {

}

const SettingsButton = (props) => {
    const [settings, changeSettings] = useState({});
    const kek = {
        text: 'hiya'
    };
    return (<li onClick={() => getFlickrData(kek)} className='navigationItem'>
            Settings
    </li>)
};

export default SettingsButton;
