import React from 'react'
import './SettingsModal.scss';

const SettingsModal = (props) => {
    return props.show ?
        (<div className="modal">
            {props.children}
            <button onClick={props.search}>Search for Theodore Roosevelt</button>
            <button onClick={props.close}>Close</button>
        </div>) : null;
}

export default SettingsModal;
