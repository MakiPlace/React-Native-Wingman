import React, { Component } from "react";
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  WebView
} from "react-native";
import styles from "./styles";

const TEXT_INPUT_REF = "urlInput";
const WEBVIEW_REF = "webview";
const DEFAULT_URL = "https://m.facebook.com";

export default class WebViews extends Component {
  state = {
    url: DEFAULT_URL,
    status: "No Page Loaded",
    backButtonEnabled: false,
    forwardButtonEnabled: false,
    loading: true,
    scalesPageToFit: true
  };

  inputText = "";

  handleTextInputChange = event => {
    let url = event.nativeEvent.text;
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = "http://" + url;
    }
    this.inputText = url;
  };

  goBack = () => {
    this.refs[WEBVIEW_REF].goBack();
  };

  goForward = () => {
    this.refs[WEBVIEW_REF].goForward();
  };

  reload = () => {
    this.refs[WEBVIEW_REF].reload();
  };

  onShouldStartLoadWithRequest = event => {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  onNavigationStateChange = navState => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  };

  onSubmitEditing = event => {
    this.pressGoButton();
  };

  pressGoButton = () => {
    const url = this.inputText.toLowerCase();
    if (url === this.state.url) {
      this.reload();
    } else {
      this.setState({
        url: url
      });
    }
    this.refs[TEXT_INPUT_REF].blur();
  };
  render() {
    this.inputText = this.state.url;

    return (
      <View style={[styles.container]}>
        <View style={[styles.addressBarRow]}>
          <TouchableOpacity
            onPress={this.goBack}
            style={
              this.state.backButtonEnabled
                ? styles.navButton
                : styles.disabledButton
            }
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.goForward}
            style={
              this.state.forwardButtonEnabled
                ? styles.navButton
                : styles.disabledButton
            }
          >
            <Text>{">"}</Text>
          </TouchableOpacity>
          <TextInput
            ref={TEXT_INPUT_REF}
            autoCapitalize="none"
            defaultValue={this.state.url}
            onSubmitEditing={this.onSubmitEditing}
            onChange={this.handleTextInputChange}
            clearButtonMode="while-editing"
            style={styles.addressBarTextInput}
          />
          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.goButton}>
              <Text>Go -></Text>
            </View>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{ uri: this.state.url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}
