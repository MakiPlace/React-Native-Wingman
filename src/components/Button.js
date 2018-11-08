import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../styles/constant";

export default class WingmanButton extends React.PureComponent {
  componentWillMount() {
    this.buttonStyles = [styles.default];
    this.textStyles = [styles.textWhite];

    Object.keys(this.props).forEach(propKey => {
      if (propKey.indexOf("text") >= 0) {
        this.textStyles.push(styles[propKey]);
      } else if (styles[propKey]) {
        this.buttonStyles.push(styles[propKey]);
      }
    });

    // Addition styles for button
    if (this.props.style instanceof Array) {
      this.buttonStyles.push(...this.props.style);
    } else {
      this.buttonStyles.push(this.props.style);
    }

    // Addition styles for text
    if (this.props.textStyle instanceof Array) {
      this.textStyles.push(...this.props.textStyle);
    } else {
      this.textStyles.push(this.props.textStyle);
    }

    if (this.props.iconSpacing) {
      this.textStyles.push({ marginHorizontal: this.props.iconSpacing });
    } else if (this.props.iconLeft || this.props.iconRight) {
      this.textStyles.push(styles.spacing);
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={this.buttonStyles}
        onPress={this.props.onPress}
      >
        {this.props.iconLeft}
        <Text style={this.textStyles}>{this.props.title}</Text>
        {this.props.iconRight}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  spacing: {
    marginHorizontal: 8
  },

  default: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  textWhite: { color: Colors.WHITE },
  textBlack: { color: Colors.BLACK },
  textPrimary: { color: Colors.PRIMARY },
  textSecondary: { color: Colors.SECONDARY },
  textSuccess: { color: Colors.SUCCESS },
  textWarning: { color: Colors.WARNING },
  textDanger: { color: Colors.DANGER },
  textInfo: { color: Colors.INFO },
  textLight: { color: Colors.LIGHT },
  textDark: { color: Colors.DARK },

  textLarge: { fontSize: 16 },

  primary: { backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY },
  secondary: { backgroundColor: Colors.SECONDARY, borderColor: Colors.SECONDARY },
  warning: { backgroundColor: Colors.WARNING, borderColor: Colors.WARNING },
  success: { backgroundColor: Colors.SUCCESS, borderColor: Colors.SUCCESS },
  danger: { backgroundColor: Colors.DANGER, borderColor: Colors.DANGER },
  info: { backgroundColor: Colors.INFO, borderColor: Colors.INFO },
  light: { backgroundColor: Colors.LIGHT, borderColor: Colors.LIGHT },
  dark: { backgroundColor: Colors.DARK, borderColor: Colors.DARK },

  outlinePrimary: { borderColor: Colors.PRIMARY },
  outlineSecondary: { borderColor: Colors.SECONDARY },
  outlineSuccess: { borderColor: Colors.SUCCESS },
  outlineWarning: { borderColor: Colors.WARNING },
  outlineDanger: { borderColor: Colors.DANGER },
  outlineInfo: { borderColor: Colors.INFO },
  outlineLight: { borderColor: Colors.LIGHT },
  outlineDark: { borderColor: Colors.DARK },

  rounded: { borderRadius: 40 },

  block: {
    alignSelf: "auto",
  },

  full: {
    alignSelf: "auto",
    borderRadius: 0
  },

  large: {
    paddingVertical: 14,
    paddingHorizontal: 18
  },

  small: {
    paddingVertical: 6,
    paddingHorizontal: 12
  }
});
