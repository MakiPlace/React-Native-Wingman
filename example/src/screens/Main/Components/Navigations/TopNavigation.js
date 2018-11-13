import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";
import { TabNavigator } from "react-navigation";
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';



var TopNavigation = TabNavigator({
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    Tab3: { screen: Tab3 }
}, {
        tabBarPosition: 'top',
        swipeEnable: true,
        tabBarOptions: {
            activeTintColor: 'white',

        }
    });

TopNavigation.navigationOptions = {
    title: "Bottom Navigation"
};

export default TopNavigation;