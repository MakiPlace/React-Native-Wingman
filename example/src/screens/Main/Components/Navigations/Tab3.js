import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./styles";

export default class SettingScreen extends Component {

    static navigationOptions = {
        tabBarLabel: 'Tab3',
    }

    render() {
        return (
            <View style={styles.wrapper}>

                <Text >Tab3</Text>
            </View>
        );
    }
}
