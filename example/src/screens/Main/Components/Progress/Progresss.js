import React, { Component } from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import styles from "./styles";

export default class Progresss extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.Item}>
          <Text style={{ marginBottom: 10 }}>Bar Progress </Text>
          <Progress.Bar
            progress={0.3}
            width={200}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />
        </View>

        <View style={styles.Item}>
          <Text style={{ marginBottom: 10 }}>Pie Progress</Text>
          <Progress.Pie
            progress={0.4}
            size={50}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />
        </View>

        <View style={styles.Item}>
          <Text style={{ marginBottom: 10 }}>Circle Progress</Text>
          <Progress.Circle
            size={30}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />
        </View>
        <View style={styles.Item}>
          <Text style={{ marginBottom: 10 }}>
            Circle Progress Counter Clockwise
          </Text>
          <Progress.Circle
            size={30}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            direction="counter-clockwise"
          />
        </View>
      </View>
    );
  }
}
