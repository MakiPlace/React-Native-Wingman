import React, { Component } from "react";
import { Text, View,FlatList } from "react-native";
import styles from "./styles";

export default class GridView extends Component {
  constructor(props)
 {
   super(props);
 
   this.state = { Item: [
     {key: 'One'},
     {key: 'Two'},
     {key: 'Three'},
     {key: 'Four'},
     {key: 'Five'},
     {key: 'Six'},
     {key: 'Seven'},
     {key: 'Eight'},
     {key: 'Nine'},
     {key: 'Ten'},
     {key: 'Eleven'},
     {key: 'Twelve'},
     {key: 'Thirteen'},
     {key: 'Fourteen'},
     {key: 'Fifteen'},
     {key: 'Sixteen'},
     {key: 'Seventeen'},
     {key: 'Eighteen'},
     {key: 'Nineteen'},
     {key: 'Twenty'}
   ]}
 }
  render() {
    return (
      <View style={styles.MainContainer}> 
        <FlatList     
          data={ this.state.Item }
          renderItem={({item}) =><View style={styles.BlockStyle}>
              <Text style={styles.ItemStyle}> {item.key} </Text>
              </View>} 
          numColumns={2}
        />
      </View>
    );
  }
}
