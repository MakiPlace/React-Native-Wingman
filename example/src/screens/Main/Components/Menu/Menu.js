import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import {DrawerNavigator} from 'react-navigation';

import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';


const navigation = DrawerNavigator({
    Page1:{
        screen: Page1
    },
    Page2:{
        screen: Page2
    },
    Page3:{
        screen: Page3
    },
})

export default navigation
