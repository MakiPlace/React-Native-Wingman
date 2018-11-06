import React, { Component } from "react";
import { View, ScrollView, Text, StatusBar, SafeAreaView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./SliderEntry.style";
import SliderEntry from "./SliderEntry";
import styles, { colors } from "./styles";
import { ENTRIES1 } from "./entries";

const SLIDER_1_FIRST_ITEM = 1;

export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  mainSwiper(title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>Default Layout </Text>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor="#50C9C3"
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }

  render() {
    const example1 = this.mainSwiper(1);

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor={"rgba(0, 0, 0, 0.1)"}
            barStyle={"light-content"}
          />
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            {example1}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
