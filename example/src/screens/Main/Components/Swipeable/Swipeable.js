import React, { Component } from "react";
import { Text, View,TouchableOpacity,Image } from "react-native";
import styles from "./styles";

export default class Menu extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:"column",}}>
         <View>
            <TouchableOpacity 
              onPress = {() => this.props.navigation.openDrawer()}> 
              <Image 
                style={{width:32, height:32}}
                source={require('example/src/screens/Main/Components/Menu/icon/format-list-bulleted.png')}
                />
            </TouchableOpacity>
          </View>
          <View style={{flex:1,backgroundColor:"#111",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontWeight:"bold",fontSize:22,color:'white'}}>
               Hello
            </Text>
        </View>
      </View>
    )
  }
}