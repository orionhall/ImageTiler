import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return (
        <header className="toolbar">
            <Logo />
            <NavigationItems toggleModalHandler={props.toggleModalHandler} />
        </header>
    );
};

export default Toolbar;
