import React, { Component } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import styles from "./styles";

export default class Images extends Component {
  render() {
    return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          
          <Text style={styles.h4}>Responsive Image</Text>

          <Image
            source={{uri: 'https://placehold.it/800x600'}}
            resizeMode={'cover'}
            style={{ width: '100%', height: 200, marginBottom: 16 }}
          />

          <Text style={styles.h4}>Image thumbnails</Text>

          <View style={[styles.imgThumbnail, { marginBottom: 16 }]}>
            <Image
              source={{uri: 'https://placehold.it/100x100'}}
              style={{ width: 100, height: 100 }}
            />
          </View>

          <Text style={styles.h4}>Rounded images</Text>
          
          <Image
            source={{uri: 'https://placehold.it/100x100'}}
            style={{ width: 100, height: 100, borderRadius: 4, marginBottom: 16 }}
          />

          <Text style={styles.h4}>Circle images</Text>

          <Image
            source={{uri: 'https://placehold.it/100x100'}}
            style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 16 }}
          />
        </View>
      </ScrollView>
    </View>
    );
  }
}
