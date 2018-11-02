import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import GridView from "react-native-super-grid";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

export default class Components extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Components"
  });

  render() {
    const items = [
      {
        name: "Activity Indicators",
        icon: {
          name: "replay",
          color: "#4285f4"
        },
        routeName: "ActivityIndicators"
      },
      {
        name: "Alerts",
        icon: {
          name: "warning",
          color: "#db4437"
        },
        routeName: "Alerts"
      },
      {
        name: "Badges",
        icon: {
          name: "add-alert",
          color: "#db4437"
        },
        routeName: "Badges"
      },
      {
        name: "Buttons",
        icon: {
          name: "touch-app",
          color: "#0f9d58"
        },
        routeName: "Buttons"
      },
      {
        name: "Calendars",
        icon: {
          name: "picture-in-picture-alt",
          color: "#f4b400"
        },
        routeName: "Calendars"
      },
      {
        name: "Cards",
        icon: {
          name: "picture-in-picture-alt",
          color: "#f4b400"
        },
        routeName: "Card"
      },
      {
        name: "Charts",
        icon: {
          name: "picture-in-picture-alt",
          color: "#f4b400"
        },
        routeName: "Charts"
      },

      {
        name: "Flat List",
        icon: {
          name: "check-box",
          color: "#db4437"
        },
        routeName: "FlatLists"
      },
      {
        name: "Forms",
        icon: {
          name: "check-box",
          color: "#db4437"
        },
        routeName: "Forms"
      },
      {
        name: "Icons",
        icon: {
          name: "tag-faces",
          color: "#0f9d58"
        },
        routeName: "Icons"
      },
      {
        name: "Images",
        icon: {
          name: "image",
          color: "#f4b400"
        },
        routeName: "Images"
      },
      {
        name: "List View",
        icon: {
          name: "view-module",
          color: "#f4b400"
        },
        routeName: "ListViews"
      },
      {
        name: "Maps",
        icon: {
          name: "map",
          color: "#0f9d58"
        },
        routeName: "Maps"
      },
      {
        name: "Menu",
        icon: {
          name: "call-to-action",
          color: "#0f9d58"
        },
        routeName: "Menu"
      },
      {
        name: "Modals",
        icon: {
          name: "call-to-action",
          color: "#0f9d58"
        },
        routeName: "Modals"
      },
      {
        name: "Navigations",
        icon: {
          name: "call-to-action",
          color: "#0f9d58"
        },
        routeName: "Navigations"
      },
      {
        name: "Pickers",
        icon: {
          name: "playlist-add-check",
          color: "#4285f4"
        },
        routeName: "Pickers"
      },
      {
        name: "Progress",
        icon: {
          name: "sort",
          color: "#db4437"
        },
        routeName: "Progress"
      },
      {
        name: "Shares",
        icon: {
          name: "sort",
          color: "#db4437"
        },
        routeName: "Shares"
      },
      {
        name: "Sliders",
        icon: {
          name: "sort",
          color: "#db4437"
        },
        routeName: "Sliders"
      },
      {
        name: "Swipeable",
        icon: {
          name: "sort",
          color: "#db4437"
        },
        routeName: "Swipeable"
      },
      {
        name: "Swiper",
        icon: {
          name: "text-fields",
          color: "#f4b400"
        },
        routeName: "Swiper"
      },
      {
        name: "Texts",
        icon: {
          name: "text-fields",
          color: "#f4b400"
        },
        routeName: "Texts"
      },
      {
        name: "Web View",
        icon: {
          name: "text-fields",
          color: "#f4b400"
        },
        routeName: "WebViews"
      }
    ];
    return (
      <View style={styles.wrapper}>
        <GridView
          spacing={1}
          items={items}
          renderItem={item => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(item.routeName);
              }}
              onLongPress={() => {
                this.props.navigation.navigate(item.routeName);
              }}
              key={item.routeName}
            >
              <View style={styles.gridItem}>
                <Icon style={styles.gridItemIcon} {...item.icon} size={32} />
                <Text style={styles.gridItemTitle}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
