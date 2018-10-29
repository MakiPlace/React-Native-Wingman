import React, { Component } from "react";
import { View, Text, Share } from "react-native";

import { Button } from "react-native-wingman";

import styles from "./styles";

const title = "Share";
const description = "Share data with other Apps.";
const examples = [
  {
    title: "Share Text Content",
    render() {
      return <Shares />;
    }
  }
];

export default class Shares extends Component {
  constructor(props) {
    super(props);

    this._shareMessage = this._shareMessage.bind(this);
    this._shareText = this._shareText.bind(this);
    this._showResult = this._showResult.bind(this);

    this.state = {
      result: ""
    };
  }

  _shareMessage() {
    Share.share({
      message:
        "React Native Wingman | A framework for building native apps more easier"
    })
      .then(this._showResult)
      .catch(error => this.setState({ result: "error: " + error.message }));
  }

  _shareText() {
    Share.share(
      {
        message: "A framework for building native apps more easier",
        url: "http://facebook.github.io/react-native/",
        title: "React Native Wingman"
      },
      {
        subject: "A subject to go in the email heading",
        dialogTitle: "Share React Native Wingman website",
        excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"],
        tintColor: "green"
      }
    )
      .then(this._showResult)
      .catch(error => this.setState({ result: "error: " + error.message }));
  }

  _showResult(result) {
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        this.setState({
          result: "shared with an activityType: " + result.activityType
        });
      } else {
        this.setState({ result: "shared" });
      }
    } else if (result.action === Share.dismissedAction) {
      this.setState({ result: "dismissed" });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Button
            style={styles.buttonSingle}
            onPress={this._shareMessage}
            primary
            block
            title="Click to share message"
          />
        </View>
        <View style={styles.wrapper}>
          <Button
            style={styles.buttonSingle}
            onPress={this._shareText}
            primary
            block
            title="Click to share message, URL and title"
          />
        </View>
        <Text style={styles.title}>Status : {this.state.result}</Text>
      </View>
    );
  }
}
