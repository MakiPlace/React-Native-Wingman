import React, { Component } from "react";
import { Text, View, ScrollView,TextInput,Picker,Slider,Switch,CheckBox,TouchableOpacity  } from "react-native";
import styles from "./styles";

export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state={
      text:'',
      textArea:'',
      select:"",
      isRadioSelected: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      activeSwitch: null,
    }
  }
  
  onRadioClick = () => {
    console.log('click:', this.state.isRadioSelected)
    if(this.state.isRadioSelected) {
      this.setState({
        isRadioSelected: false
      })
    } else {
      this.setState({
        isRadioSelected: true
      })
    }
    this.forceUpdate()
  }

  toggleSwitch = (onSwitch) => {
    this.setState({
      activeSwitch: onSwitch === this.state.activeSwitch ? null : onSwitch
    })
  };
  onSwitch = (value) => { this.toggleSwitch(1) };
  
  render() {
    return (
      <ScrollView>
        <Text style={styles.text}>Text Input</Text>
        <TextInput 
            style={styles.textInput} 
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        ></TextInput>
        <Text style={styles.text}>Text Area</Text>
        <TextInput 
            style={styles.textArea}
            editable = {true}
            multiline={true}
            numberOfLines={5}
            onChangeText={(textArea) => this.setState({textArea})}
            value={this.state.textArea}
        ></TextInput>
        <Text style={styles.text}>Select</Text>
        <Picker
            style={styles.picker}
            selectedValue={this.state.select}
            onValueChange={(itemValue, itemIndex) => this.setState({select: itemValue})}>
            <Picker.Item label="one" value="one" />
            <Picker.Item label="two" value="two" />
            <Picker.Item label="three" value="three" />
        </Picker>

        <Text style={styles.text}>Radio</Text>
        <TouchableOpacity  onPress={this.onRadioClick}> 
          <View style={{flexDirection:"row"}}>  
            <View style={styles.radio}>
              {
                this.state.isRadioSelected ?
                <View style={styles.radioSelected}/>
                  :
                  null
              }
            </View>
            <Text style={{paddingTop:10}}>Male</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={this.onRadioClick}> 
          <View style={{flexDirection:"row"}}>  
            <View style={styles.radio}>
              {
                this.state.isRadioSelected ?
                <View style={styles.radioSelected}/>
                  :
                  null
              }
            </View>
            <Text style={{paddingTop:10}}>Famale</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={this.onRadioClick}> 
          <View style={{flexDirection:"row"}}>
            <View style={styles.radio}>
              {
                this.state.isRadioSelected ?
                <View style={styles.radioSelected}/>
                  :
                  null
              }
            </View>
            <Text style={{paddingTop:10}}>Other</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Check Box</Text>
        <View style={styles.checkBox}>
          <View style={{flexDirection:"row"}}>
            <CheckBox  
              value={this.state.checkbox1} 
              onChange={() => this.setState({ checkbox1: !this.state.checkbox1})} /> 
            <Text style={{paddingTop:5}}>Orange</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox 
              value={this.state.checkbox2} 
              onChange={() => this.setState({ checkbox2: !this.state.checkbox2})} />
            <Text style={{paddingTop:5}}>Mango</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <CheckBox 
              value={this.state.checkbox3} 
              onChange={() => this.setState({ checkbox3: !this.state.checkbox3})} />
            <Text style={{paddingTop:5}}>Coconut</Text>
          </View>
        </View>

        <Text style={styles.text}>Switch</Text>
        <View style={styles.switch}>
            <Text>Switch</Text>
            <Switch
              onValueChange={this.onSwitch}
              value={this.state.activeSwitch === 1}
              style={{paddingLeft:270}} 
            />
        </View>

        <Text style={styles.text}>Slider</Text>
        <View style={styles.slider}>
            <Text>Dark</Text>
            <Slider style={{width:300}} />
            <Text>Light</Text>
        </View>
      </ScrollView>
    );
  }
}
