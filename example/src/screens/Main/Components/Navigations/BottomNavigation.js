import React, { Component } from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';



var BottomNavigation = TabNavigator({
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    Tab3: { screen: Tab3 }
}, {
        tabBarPosition: 'bottom',
        swipeEnable: true,
        tabBarOptions: {
            activeTintColor: 'white',

        }
    });

BottomNavigation.navigationOptions = {
    title: "Bottom Navigation"
};

export default BottomNavigation;