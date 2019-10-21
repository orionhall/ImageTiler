import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import SettingsButton from './SettingsButton/SettingsButton';

const NavigationItems = (props) => (
    <div className="navigationItems">
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/'>About</NavigationItem>
        <SettingsButton toggleModalHandler={props.toggleModalHandler} />
    </div>
);

export default NavigationItems;
