import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Base } from "react-native-wingman";
import styles from "./styles";

export default class Texts extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={Base.h1}>Heading 1</Text>
            <Text style={Base.h2}>Heading 2</Text>
            <Text style={Base.h3}>Heading 3</Text>
            <Text style={Base.h4}>Heading 4</Text>
            <Text style={Base.p}>
              This is paragraph: "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit".
            </Text>
            <Text style={Base.h4}>1. Inline Text Elements</Text>
            <Text style={Base.p}>
              You can use Base.mark to{" "}
              <Text style={Base.mark}> highlight </Text> text.
            </Text>
            <Text style={[Base.p, Base.del]}>
              This line of text is meant to be treated as deleted text.
            </Text>
            <Text style={[Base.p, Base.s]}>
              This line of text is meant to be treated as no longer accurate.
            </Text>
            <Text style={[Base.p, Base.ins]}>
              This line of text is meant to be treated as an addition to the
              document.
            </Text>
            <Text style={[Base.p, Base.u]}>
              This line of text will render as underlined.
            </Text>
            <Text style={[Base.p, Base.small]}>
              This line of text is meant to be treated as fine print.
            </Text>
            <Text style={[Base.p, Base.strong]}>
              This line rendered as bold text.
            </Text>
            <Text style={[Base.p, Base.em]}>
              This line rendered as italicized text.
            </Text>
            <Text style={Base.h4}>2. Text Alignment</Text>
            <Text style={[Base.p, Base.textJustify]}>
              Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
              purus sit amet fermentum. Donec sed odio operae, eu vulputate
              felis rhoncus.
            </Text>
            <Text style={[Base.p, Base.textLeft]}>
              Left aligned text on all viewport sizes.
            </Text>
            <Text style={[Base.p, Base.textCenter]}>
              Center aligned text on all viewport sizes.
            </Text>
            <Text style={[Base.p, Base.textRight]}>
              Right aligned text on all viewport sizes.
            </Text>
            <Text style={Base.h4}>3. Text Color</Text>
            <Text style={[Base.p, Base.textPrimary]}>.textPrimary</Text>
            <Text style={[Base.p, Base.textSecondary]}>.textSecondary</Text>
            <Text style={[Base.p, Base.textSuccess]}>.textSuccess</Text>
            <Text style={[Base.p, Base.textDanger]}>.textDanger</Text>
            <Text style={[Base.p, Base.textWarning]}>.textWarning</Text>
            <Text style={[Base.p, Base.textInfo]}>.textInfo</Text>
            <Text style={[Base.p, Base.textLight, Base.bgDark]}>
              .textLight
            </Text>
            <Text style={[Base.p, Base.textDark]}>.textDark</Text>
            <Text style={[Base.p, Base.textWhite, Base.bgDark]}>
              .textWhite
            </Text>
            <Text style={Base.h4}>4. Background Color</Text>
            <Text
              style={[
                Base.bgPrimary,
                Base.textWhite,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgPrimary
            </Text>
            <Text
              style={[
                Base.bgSecondary,
                Base.textWhite,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgSecondary
            </Text>
            <Text
              style={[
                Base.bgSuccess,
                Base.textWhite,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgSuccess
            </Text>
            <Text
              style={[
                Base.bgDanger,
                Base.textWhite,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgDanger
            </Text>
            <Text
              style={[
                Base.bgWarning,
                Base.textDark,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgWarning
            </Text>
            <Text
              style={[
                Base.bgInfo,
                Base.textWhite,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgInfo
            </Text>
            <Text
              style={[
                Base.bgLight,
                Base.textDark,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgLight
            </Text>
            <Text
              style={[
                Base.bgDark,
                Base.textWhite,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgDark
            </Text>
            <Text
              style={[
                Base.bgWhite,
                Base.textDark,
                { marginBottom: 8, padding: 4 }
              ]}
            >
              .bgWhite
            </Text>
            <Text style={Base.h4}>5. Font Weight</Text>
            <Text style={[Base.p, Base.fontWeightBold]}>Bold text.</Text>
            <Text style={[Base.p, Base.fontWeightNormal]}>
              Normal weight text.
            </Text>
            <Text style={[Base.p, Base.fontWeightLight]}>
              Light weight text.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
