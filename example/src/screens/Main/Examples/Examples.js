import React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles, { CARD_WIDTH_PERCENT, SCREEN_WIDTH } from "./styles";

const LAYOUTS = [
  {
    key: "login1",
    title: "Login",
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1024px-Hopetoun_falls.jpg"
  },
  {
    key: "login2",
    title: "Walkthrough",
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1024px-Hopetoun_falls.jpg"
  },
  {
    key: "login3",
    title: "E-Commerce",
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1024px-Hopetoun_falls.jpg"
  },
  {
    key: "login4",
    title: "E-Commerce 2",
    preview:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/1024px-Hopetoun_falls.jpg"
  }
];

export default class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: LAYOUTS[0].title
    };
  }

  _renderCardShadow(elevation) {
    return (
      <View
        style={[
          {
            // 12 16, 19
            bottom: elevation * 6,
            left: 8 / elevation,
            right: 8 / elevation,
            elevation: elevation,
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowRadius: elevation * 2,
            shadowOpacity: 0.24,
            shadowColor: "black"
          },
          styles.shadowCard
        ]}
      />
    );
  }

  _renderItem({ item }) {
    return (
      <View style={styles.card}>
        {this._renderCardShadow(1)}
        {this._renderCardShadow(2)}
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: item.preview }} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Carousel
          ref={c => (this._carousel = c)}
          data={LAYOUTS}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH * CARD_WIDTH_PERCENT}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={index => this.setState({ title: LAYOUTS[index].title })}
        />
      </View>
    );
  }
}
