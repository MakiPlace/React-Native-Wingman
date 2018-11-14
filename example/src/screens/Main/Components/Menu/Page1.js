import React, { Component } from "react";
import { Text, View, Button,TouchableOpacity,Image } from "react-native";
export default class Page1 extends Component {
  render() {
    return (
        <View style={{flex:1,flexDirection:"column",}}>
            <View style={{backgroundColor:"rgba(92, 99,216, 1)",}}>
                <TouchableOpacity 
                    onPress = {() => this.props.navigation.openDrawer()}> 
                    <Image 
                        style={{width:50, height:50}}
                        source={require('example/src/assets/img/menu.png')}
                        />
                </TouchableOpacity>
            </View>     
            <View style={{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:22,color:'black'}}>
                page1
                </Text>
            </View>
        </View>
    );
  }
}