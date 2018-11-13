import React, { Component } from "react";
import { Text, View,TouchableOpacity,Image,Button } from "react-native";
import {DrawerNavigator} from 'react-navigation';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const MyDrawerNavigator = DrawerNavigator({
  Page1: {
    screen: Page1
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {
  drawerWidth: 300
});
export default MyDrawerNavigator;
