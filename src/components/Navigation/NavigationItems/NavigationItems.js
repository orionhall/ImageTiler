import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <div className="navigationItems">
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/'>About</NavigationItem>
        <NavigationItem link='/'>Settings</NavigationItem>
    </div>
);

export default NavigationItems;
