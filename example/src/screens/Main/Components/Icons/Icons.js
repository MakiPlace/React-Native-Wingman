import React from "react";
import { FlatList, View, Text, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconIonics from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconFeather from "react-native-vector-icons/Feather";
import ElementItemFlatlist from "../../../../Components/ElementItemFlatlist";
import styles from "./styles";
import {
  listFontAwesome,
  listFontIonics,
  listAntDesign,
  listEntypo,
  listEvilIcons,
  listFeather
} from "./ListIcons";

export default class Alerts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "Vector Icon (Font Awesome)",
        "Vector Icon (Ionics Icon)",
        "Vector Icon (Ant Design)",
        "Vector Icon (Entypo)",
        "Vector Icon (IconEvilIcons)",
        "Vector Icon (Feather)"
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

  _renderModalShowIcons = () => (
    <Modal
      transparent={false}
      animationType="fade"
      visible={this.state.visibleModal}
      onRequestClose={this._toggleModal}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        {this._renderHeader()}

        <View style={styles.containerChild}>
          {this._renderChild(this.state.itemIndex)}
        </View>
      </View>
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
        return this._renderFontAwesomeIcon();

      case 1:
        return this._renderFontIonicsIcon();

      case 2:
        return this._renderAntDesignIcon();

      case 3:
        return this._renderEntypoIcon();

      case 4:
        return this._renderIconEvilIcons();

        case 5:
        return this._renderIconFeather();
    }
  }

  /**
|------------------------------------------------------------------------
| Render layout Font Awesome
|------------------------------------------------------------------------
*/

  _renderFontAwesomeIcon = () => (
    <View style={styles.centerItem}>
      <FlatList
        data={listFontAwesome}
        renderItem={this._renderItemFontAwesome}
        numColumns={6}
        keyExtractor={index => index.toString()}
      />
    </View>
  );

  _renderItemFontAwesome = ({ item }) => (
    <View style={styles.containerItem}>
      <Icon name={item} size={24} />
    </View>
  );

  /**
|------------------------------------------------------------------------
| Render layout Font Ionics
|------------------------------------------------------------------------
*/

  _renderFontIonicsIcon = () => (
    <View style={styles.centerItem}>
      <FlatList
        data={listFontIonics}
        renderItem={this._renderItemFontIonics}
        numColumns={6}
        keyExtractor={index => index.toString()}
      />
    </View>
  );

  _renderItemFontIonics = ({ item }) => (
    <View style={styles.containerItem}>
      <IconIonics name={item} size={24} />
    </View>
  );

  /**
|------------------------------------------------------------------------
| Render layout Ants Design
|------------------------------------------------------------------------
*/

  _renderAntDesignIcon = () => (
    <View style={styles.centerItem}>
      <FlatList
        data={listAntDesign}
        renderItem={this._renderItemAntDesign}
        numColumns={6}
        keyExtractor={index => index.toString()}
      />
    </View>
  );

  _renderItemAntDesign = ({ item }) => (
    <View style={styles.containerItem}>
      <IconAntDesign name={item} size={24} />
    </View>
  );

  /**
|------------------------------------------------------------------------
| Render layout EntypoIcon
|------------------------------------------------------------------------
*/

  _renderEntypoIcon = () => (
    <View style={styles.centerItem}>
      <FlatList
        data={listEntypo}
        renderItem={this._renderItemEntypo}
        numColumns={6}
        keyExtractor={index => index.toString()}
      />
    </View>
  );

  _renderItemEntypo = ({ item }) => (
    <View style={styles.containerItem}>
      <IconEntypo name={item} size={24} />
    </View>
  );

  /**
|------------------------------------------------------------------------
| Render layout EvilIcons
|------------------------------------------------------------------------
*/

  _renderIconEvilIcons = () => (
    <View style={styles.centerItem}>
      <FlatList
        data={listEvilIcons}
        renderItem={this._renderItemIconEvilIcons}
        numColumns={6}
        keyExtractor={index => index.toString()}
      />
    </View>
  );

  _renderItemIconEvilIcons = ({ item }) => (
    <View style={styles.containerItem}>
      <IconEvilIcons name={item} size={24} />
    </View>
  );
  

  /**
|------------------------------------------------------------------------
| Render layout Icon Feather
|------------------------------------------------------------------------
*/

_renderIconFeather = () => (
  <View style={styles.centerItem}>
    <FlatList
      data={listFeather}
      renderItem={this._renderItemIconFeather}
      numColumns={6}
      keyExtractor={index => index.toString()}
    />
  </View>
);

_renderItemIconFeather = ({ item }) => (
  <View style={styles.containerItem}>
    <IconFeather name={item} size={24} />
  </View>
);


  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderModalShowIcons()}
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
