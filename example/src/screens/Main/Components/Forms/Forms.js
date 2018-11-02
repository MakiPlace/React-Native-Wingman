import React from "react";
import {
  FlatList,
  View,
  Text,
  Modal,
  TextInput,
  SafeAreaView,
  Picker,
  RadioForm,
  radio_props,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import ElementItemFlatlist from "../../../../Components/ElementItemFlatlist";

import styles from "./styles";

const FloatingLabel = require("react-native-floating-labels");

export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Fixed Label",
        "Floating Label",
        "Placeholder Label",
        "Stacked Button",
        "Regular Textbox",
        "Underlined Textbox",
        "Rounded Textbox",
        "Icon Textbox",
        "Success Input Textbox",
        "Error Input Textbox",
        "Disable Textbox",
        "TextArea"
      ],

      visibleModal: false,
      itemIndex: 0
    };

    this._toggleModal = this._toggleModal.bind(this);
  }
  
  _renderItems = ({ item, index }) => {
    return (
      <ElementItemFlatlist
        onPress={index => {
          this.setState({
            visibleModal: true,
            itemIndex: index
          });
        }}
        index={index}
        data={item}
      />
    );
  };

  _renderModalShowForms = () => (
    <Modal
      transparent={false}
      animationType="fade"
      visible={this.state.visibleModal}
      onRequestClose={this._toggleModal}
    >
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", backgroundColor: "#4285f4" }}
      >
        {this._renderHeader()}

        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 16,
            width: "100%"
          }}
        >
          {this._renderChild(this.state.itemIndex)}
        </View>
      </SafeAreaView>
    </Modal>
  );

  // TODO: Ẩn hiện Modal
  _toggleModal() {
    this.setState({
      visibleModal: !this.state.visibleModal
    });
  }

  /**
  |------------------------------------------------------------------------
  | Render layout Header & Layout Child trong Modal
  |------------------------------------------------------------------------
  */

  _renderHeader = () => (
    <View style={styles.containerHeader}>
      <IconAntDesign
        color="#fff"
        onPress={this._toggleModal}
        size={24}
        name="close"
      />
      <Text style={styles.titleHeader}>
        {this.state.data[this.state.itemIndex]}
      </Text>
    </View>
  );

  _renderChild(index) {
    switch (index) {
      case 0:
        return this._renderFixedLabel();

      case 1:
        return this._renderFloatingLabel();

      case 2:
        return this._renderPlaceholderLabel();

      case 3:
        return this._renderStackedLabel();

      case 4:
        return this._renderRegularTextbox();

      case 5:
        return this._renderUnderlineTextbox();

      case 6:
        return this._renderRoundedTextbox();

      case 7:
        return this._renderIconInput();

      case 8:
        return this._renderSuccesTextInput();

      case 9:
        return this._renderErrorTextInput();

      case 10:
        return this._renderDisableTextInput();

      case 11:
        return this._renderTextArea();
    }
  }

  /**
|------------------------------------------------------------------------
| Render layout các Card
|------------------------------------------------------------------------
*/

  _renderFixedLabel = () => (
    <View style={styles.centerItem}>
      <TextInput
        style={styles.boxInput}
        editable={false}
        placeholder="UserName"
      />
      <TextInput
        style={styles.textArea}
        editable={false}
        placeholder="Text"
      />

      <Picker
        mode="dropdown"
        style={styles.seLect}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );

  _renderFloatingLabel = () => (
    <View style={styles.centerItem}>
      <FloatingLabel
        labelStyle={styles.textLabel}
        inputStyle={{ borderWidth: 0, fontSize: 14 }}
        style={styles.boxInput}
      >
        Username
      </FloatingLabel>
      <FloatingLabel
        labelStyle={styles.textLabel}
        inputStyle={{ borderWidth: 0, fontSize: 14 }}
        style={styles.boxInput}
      >
        Password
      </FloatingLabel>

      <Button
        backgroundColor="#03A9F4"
        buttonStyle={[styles.styleButton, { borderRadius: 20 }]}
        title="Login"
      />
    </View>
  );

  _renderPlaceholderLabel = () => (
    <View style={styles.centerItem}>
      <TextInput style={styles.boxInput} placeholder="Username" />
      <TextInput
        style={styles.boxInput}
        placeholder="Password"
        secureTextEntry
      />

      <Button
        backgroundColor="#03A9F4"
        buttonStyle={[styles.styleButton, { borderRadius: 20 }]}
        title="Login"
      />
    </View>
  );

  _renderStackedLabel = () => (
    <View style={styles.centerItem}>
      <Text style={[styles.textLabel, { marginTop: 16, paddingStart: 16 }]}>
        Username
      </Text>
      <TextInput style={styles.boxInput} />

      <Text style={[styles.textLabel, { marginTop: 16, paddingStart: 16 }]}>
        Password
      </Text>
      <TextInput style={styles.boxInput} secureTextEntry />

      <Button
        backgroundColor="#03A9F4"
        buttonStyle={[styles.styleButton, { borderRadius: 20 }]}
        title="Login"
      />
    </View>
  );

  _renderRegularTextbox = () => (
    <View style={styles.centerItem}>
      <TextInput
        style={[styles.boxInput, { borderWidth: 1, borderColor: "#eeeeee" }]}
        placeholder="Username"
      />
    </View>
  );

  _renderUnderlineTextbox = () => (
    <View style={styles.centerItem}>
      <TextInput style={styles.boxInput} placeholder="Username" />
    </View>
  );

  _renderRoundedTextbox = () => (
    <View style={styles.centerItem}>
      <TextInput
        style={[
          styles.boxInput,
          { borderWidth: 1, borderColor: "#eeeeee", borderRadius: 40 }
        ]}
        placeholder="Username"
      />
    </View>
  );

  _renderIconInput = () => (
    <View style={styles.containerIconInput}>
      <Icon style={{ marginEnd: 10 }} size={24} name="user-plus" color="#333" />
      <TextInput
        style={{ height: 56, width: "100%" }}
        placeholder="Add Friends"
      />
    </View>
  );

  _renderSuccesTextInput = () => (
    <View style={[styles.containerIconInput, { borderBottomColor: "#0a842e" }]}>
      <TextInput style={{ flex: 1 }} value="Success Input" />
      <IconAntDesign
        style={{ marginEnd: 10 }}
        size={24}
        name="checkcircle"
        color="#0a842e"
      />
    </View>
  );

  _renderErrorTextInput = () => (
    <View style={[styles.containerIconInput, { borderBottomColor: "#db1539" }]}>
      <TextInput style={{ flex: 1 }} value="Error Input" />
      <IconAntDesign
        style={{ marginEnd: 10 }}
        size={24}
        name="closecircle"
        color="#db1539"
      />
    </View>
  );

  _renderDisableTextInput = () => (
    <View style={styles.containerIconInput}>
      <TextInput style={{ flex: 1 }} value="Disable Input" />
      <IconAntDesign
        style={{ marginEnd: 10 }}
        size={24}
        name="infocirlce"
        color="#3a3b4f"
      />
    </View>
  );

  _renderTextArea = () => (
    <View style={styles.centerItem}>
      <TextInput
        style={[
          styles.boxInput,
          { borderWidth: 1, borderColor: "#eeeeee", height: 150 }
        ]}
        placeholder="Write something ..."
      />
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderModalShowForms()}
        <FlatList
          style={{ backgroundColor: "#fff" }}
          data={this.state.data}
          renderItem={this._renderItems}
          keyExtractor={index => index.toString()}
        />
      </View>
    );
  }
}
