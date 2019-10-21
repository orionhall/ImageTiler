import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
    return (
        <header className="toolbar">
            <Logo />
            <NavigationItems />
        </header>
    );
};

export default Toolbar;
