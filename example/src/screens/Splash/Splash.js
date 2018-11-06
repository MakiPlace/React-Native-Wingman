import React from "react";
import { View, Image } from "react-native";
import { NavigationActions } from "react-navigation";
import styles from "./styles";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this._goToMainScreen = this._goToMainScreen.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this._goToMainScreen, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  _goToMainScreen() {
    this.props.navigation.replace("Main");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={require("../../assets/img/wingman-rn-logo.png")} style={{ width: 160, height: 105 }} />
      </View>
    );
  }
}
