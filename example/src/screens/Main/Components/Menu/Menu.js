import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import {DrawerNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen.js';
import InfoScreen from './InfoScreen.js';
import SettingScreen from './SettingScreen.js';


const navigation = DrawerNavigator({
    HomeScreen:{
        screen: HomeScreen
    },
    InfoScreen:{
        screen: InfoScreen
    },
    SettingScreen:{
        screen: SettingScreen
    },
})

export default navigation
