import React, { Component } from "react";
import { Text, View, FlatList,TouchableOpacity,TextInput,Image } from "react-native";
import styles from "./styles";
import { Button } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { Rating } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import { Header } from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements'

export default class Navigations extends Component{
  constructor(props) {
    super(props);
    this.state={
      text:"",
      SearchBar:"",
    };
  } 
  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  render() {
    return (
      <View>
        <View style={{marginBottom:10}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        </View>
        <SearchBar
          onChangeText={(SearchBar)=>this.setState({SearchBar})} 
              value={this.state.SearchBar}         
          placeholder='Type Here...' />
        <View style={{margin:10}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:15,marginRight:40}}>Name:</Text>
            <TextInput style={{borderColor:'#111',borderWidth:1,marginBottom:20,width:300}} 
              onChangeText={(text)=>this.setState({text})} 
              value={this.state.text} />
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:15,marginRight:15}}>Password:</Text>
            <TextInput style={{borderColor:'#111',borderWidth:1,marginBottom:20,width:300}} 
              onChangeText={(text)=>this.setState({text})} 
              value={this.state.text} />
          </View>
          <Button
            title="LOADING BUTTON"
            loading
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              alignItems:"center"
            }}
            containerStyle={{ marginTop: 20 }}
          />
          <CheckBox
            title="abc"
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
          <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={5}
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            onStartRating={this.ratingStarted}
            style={{ paddingVertical: 10 }}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <SocialIcon
            raised={false}
            type='gitlab'
          />
          <SocialIcon
            raised={false}
            type='facebook'
          />
          <SocialIcon
            raised={false}
            type='twitter'
          />
          <SocialIcon
            raised={false}
            type='youtube'
          />
          <SocialIcon
            raised={false}
            type='soundcloud'
          />
        </View>
      </View>
    );
  }
}

