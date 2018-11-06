import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-wingman";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const content =
  "The idea with React Native Elements is more about component structure than actual design";

const Card = ({ elevation, children }) => (
  <View
    style={{
      elevation: elevation,
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: elevation * 2,
      shadowOpacity: 0.24,
      shadowColor: "black"
    }}
  >
    {children}
  </View>
);

const basic = (
  <Card>
    <Text style={styles.marginText}>Card Basic.</Text>
    <Text style={styles.marginText} />
  </Card>
);

const headerAndFooter = () => (
  <Card>
    <Text style={styles.textTitle}>HEADER</Text>
    <Text style={styles.marginText}>{content}</Text>

    <Text style={styles.marginText}>{content}</Text>

    <Text style={[styles.textTitle, styles.marginText]}>FOOTER</Text>
  </Card>
);

const bordered = (
  <Card title="CARD BORDERED">
    <Text>{content}</Text>
  </Card>
);

const transparent = (
  <View style={{ padding: 16 }}>
    <Text style={styles.marginText}>{content}</Text>
  </View>
);

const withButton = (
  <Card>
    <Text style={styles.marginText}>{content}</Text>
    <Button
      backgroundColor="#03A9F4"
      buttonStyle={[styles.styleButton, { borderRadius: 20 }]}
      title="Click me"
    />
  </Card>
);

const withList = () => (
  <Card>
    <Text style={styles.marginText}>{content}</Text>

    <View style={styles.listContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
        }}
      />
      <Text style={styles.name}>Parazi</Text>
    </View>

    <View style={styles.listContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
        }}
      />
      <Text style={styles.name}>Christian</Text>
    </View>

    <View style={styles.listContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
        }}
      />
      <Text style={styles.name}>Brynn</Text>
    </View>
  </Card>
);

const withImage = (
  <Card title="CARD IMAGE" image={require("../../../../assets/img/demo.jpeg")}>
    <Text style={styles.marginText}>{content}</Text>
    <Button
      backgroundColor="#cc1240"
      buttonStyle={[styles.styleButton, { borderRadius: 20 }]}
      title="Subscribe"
    />
  </Card>
);

const showcase = (
  <Card containerStyle={{ padding: 0 }}>
    {/* Title */}
    <View style={[styles.listShowcase, { padding: 20 }]}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../../../assets/img/demo.jpeg")}
      />

      <View>
        <Text style={{ fontWeight: "800", color: "#333" }}>Makiplace</Text>
        <Text>Funny Coworking, Hanoi</Text>
      </View>
    </View>

    {/* Image */}
    <Image
      style={styles.placeHolderShowCase}
      source={require("../../../../assets/img/demo.jpeg")}
    />

    {/* Des */}
    <Text style={[styles.marginText, { color: "#333", paddingStart: 16 }]}>
      {content}
    </Text>

    <View style={[styles.listShowcase, { padding: 16 }]}>
      {/* Icon */}
      <Icon size={18} name="heart" color="#f00" />
      <Text style={{ marginStart: 10 }}>22,888 likes</Text>
    </View>
  </Card>
);

const radius = (
  <Card
    containerStyle={{ borderRadius: 10 }}
    title="CARD IMAGE"
    image={require("../../../../assets/img/demo.jpeg")}
  >
    <Text style={styles.marginText}>{content}</Text>
    <Button
      backgroundColor="#cc1240"
      buttonStyle={[styles.styleButton, { borderRadius: 20 }]}
      title="Subscribe"
    />
  </Card>
);
