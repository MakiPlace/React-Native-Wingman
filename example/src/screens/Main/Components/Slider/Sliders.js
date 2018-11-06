import React, { Component } from "react";
import { Text, View, Slider, SliderExample } from "react-native";
import styles from "./styles";

export default class Sliders extends Component {
  static defaultProps = {
    value: 0,
    valueInitial: 0,
    valueStep: 0,
    valueMinMax: 0,
    valueColor: 1
  };

  state = {
    value: this.props.value,
    valueInitial: this.props.valueInitial,
    valueStep: this.props.valueStep,
    valueMinMax: this.props.valueMinMax,
    valueColor: this.props.valueColor,
    slideCompletionValue: 0,
    slideCompletionCount: 0
  };
  render() {
    return (
      <View style={styles.wrapper}>
        {/* Part 1 */}

        <Text style={styles.title}>Default settings</Text>
        <Text style={styles.text}>
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider onValueChange={value => this.setState({ value: value })} />

        {/* Part 2*/}

        <Text style={styles.title}>Initital Value: 0.5</Text>
        <Text style={styles.text}>
          {this.state.valueInitial && +this.state.valueInitial.toFixed(3)}
        </Text>
        <Slider
          value={0.5}
          onValueChange={valueInitial =>
            this.setState({ valueInitial: valueInitial })
          }
        />

        {/* Part 3*/}

        <Text style={styles.title}>MinValue: -1, MaxValue:2</Text>
        <Text style={styles.text}>
          {this.state.valueMinMax && +this.state.valueMinMax.toFixed(3)}
        </Text>
        <Slider
          minimumValue={-1}
          maximumValue={2}
          onValueChange={valueMinMax =>
            this.setState({ valueMinMax: valueMinMax })
          }
        />

        {/* Part 4 */}

        <Text style={styles.title}>Step: 0.25</Text>
        <Text style={styles.text}>
          {this.state.valueStep && +this.state.valueStep.toFixed(3)}
        </Text>
        <Slider
          step={0.25}
          onValueChange={valueStep => this.setState({ valueStep: valueStep })}
        />

        {/* Part 5 */}

        <Text style={styles.title}>On Sliding Complete</Text>
        <Text style={styles.text}>
          {this.state.slideCompletionValue &&
            +this.state.slideCompletionValue.toFixed(3)}
        </Text>
        <Slider
          onSlidingComplete={value =>
            this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1
            })
          }
        />
        <Text>
          Completions: {this.state.slideCompletionCount} Value:{" "}
          {this.state.slideCompletionValue}
        </Text>

        {/* Part 6 */}

        <Text style={styles.title}>Custom min/max track tint color</Text>
        <Text style={styles.text}>
          {this.state.valueColor && +this.state.valueColor.toFixed(3)}
        </Text>
        <Slider
          minimumTrackTintColor={"blue"}
          maximumTrackTintColor={"red"}
          value={0.5}
          onValueChange={valueColor =>
            this.setState({ valueColor: valueColor })
          }
        />
      </View>
    );
  }
}
