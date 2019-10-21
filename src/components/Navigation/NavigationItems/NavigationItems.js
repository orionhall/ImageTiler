import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import SettingsButton from './SettingsButton/SettingsButton';

const NavigationItems = () => (
    <div className="navigationItems">
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/'>About</NavigationItem>
        <SettingsButton />
    </div>
);

export default NavigationItems;
