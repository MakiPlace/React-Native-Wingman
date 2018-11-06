import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Button } from "react-native-wingman";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class Buttons extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ marginBottom: 8 }}>Default Buttons</Text>
          <View style={styles.displayInline}>
            <Button style={styles.button} primary title="Primary" />
            <Button style={styles.button} secondary title="Secondary" />
            <Button style={styles.button} success title="Success" />
            <Button style={styles.button} warning title="Warning" />
            <Button style={styles.button} danger title="Danger" />
            <Button style={styles.button} info title="Info" />
            <Button style={styles.button} light textDark title="Light" />
            <Button style={styles.button} dark title="Dark" />
          </View>

          <Text style={styles.title}>Outline Buttons</Text>

          <View style={styles.displayInline}>
            <Button
              style={styles.button}
              outlinePrimary
              textPrimary
              title="Primary"
            />
            <Button
              style={styles.button}
              outlineSecondary
              textSecondary
              title="Secondary"
            />
            <Button
              style={styles.button}
              outlineSuccess
              textSuccess
              title="Success"
            />
            <Button
              style={styles.button}
              outlineWarning
              textWarning
              title="Warning"
            />
            <Button
              style={styles.button}
              outlineDanger
              textDanger
              title="Danger"
            />
            <Button style={styles.button} outlineInfo textInfo title="Info" />
            <Button
              style={styles.button}
              outlineLight
              textLight
              title="Light"
            />
            <Button style={styles.button} outlineDark textDark title="Dark" />
          </View>

          <Text style={styles.title}>Rounded Buttons</Text>

          <View style={styles.displayInline}>
            <Button
              style={styles.button}
              primary
              rounded
              title="Primary Rounded"
            />
            <Button
              style={styles.button}
              outlineSecondary
              textSecondary
              rounded
              title="Secondary Outline Rounded"
            />
          </View>

          <Text style={styles.title}>Block Buttons</Text>

          <Button
            style={styles.buttonSingle}
            primary
            block
            title="Block Button"
          />

          <Text style={styles.title}>Full Buttons</Text>

          <Button
            style={styles.buttonSingle}
            primary
            full
            title="Full Button"
          />

          <Text style={styles.title}>Large Buttons</Text>

          <Button style={styles.buttonSingle} primary large textLarge title="Large" />

          <Text style={styles.title}>Small Buttons</Text>

          <Button primary small title="Small" />
        </View>
      </ScrollView>
    );
  }
}
