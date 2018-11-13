import React, { Component } from 'react';
import styles from './styles';
import { Button } from "react-native-wingman";

import { View, Text } from 'react-native';
export default class InfoScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Item 2',
    }
    render() {
        return (
            <View style={styles.wrapper}>

                <Button
                    style={styles.button}
                    outlineSecondary
                    textSecondary
                    title="Drawer Navigation"
                    onPress={() => this.props.navigation.openDrawer()}>
                </Button>
            </View>
        )
    }
}