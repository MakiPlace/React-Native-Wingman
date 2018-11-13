import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class HomeScreen extends Component {

    static navigationOptions = {
        tabBarLabel: 'Tab1',
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Tab1</Text>
            </View>
        );
    }
}
