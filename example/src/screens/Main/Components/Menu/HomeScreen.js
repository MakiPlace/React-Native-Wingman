import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TouchableHighlight, Image } from "react-native";
import OptionsMenu from "react-native-options-menu";
import { Button } from "react-native-wingman";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

const MoreIcon = require("../../../../assets/img/menu.png");

export default class HomeScreen extends Component {
  // Drawer Navigation Menu
  static navigationOptions = {
    drawerLabel: "Item 1"
  };

  // Material Menu
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {/* Drawer Navigation Menu */}

        <Text style={{ marginBottom: 8 }}>Drawer Navigation Menu</Text>
        <Button
          style={styles.button}
          outlinePrimary
          textPrimary
          title="CLICK ME"
          onPress={() => this.props.navigation.openDrawer()}
        />

        {/* OptionsMenu */}

        <Text style={{ marginTop: 10, marginBottom: 8 }}>Option Menu</Text>
        <OptionsMenu
          button={MoreIcon}
          buttonStyle={{
            width: 50,
            height: 20,
            margin: 7.5,
            resizeMode: "contain"
          }}
          destructiveIndex={1}
          options={["Item 1", "Item 2", "Item 3"]}
          actions={[this.editPost, this.deletePost]}
        />

        {/* Material Menu   */}

        <Text style={{ marginTop: 10, marginBottom: 8 }}>Material Menu</Text>
        <Menu
          ref={this.setMenuRef}
          button={
            <Button
              style={styles.button}
              outlinePrimary
              textPrimary
              title="CLICK ME"
              onPress={this.showMenu}
            />
          }
        >
          <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={this.hideMenu}>Menu item 3</MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
        </Menu>
      </View>
    );
  }
}
