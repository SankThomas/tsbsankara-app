import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globals } from "../styles/globals";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <Text style={globals.heading}>About Me</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/icon.png")}
              style={globals.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../images/about-profile.png")}
            style={styles.image}
          />

          <View style={styles.textContainer}>
            <Text style={[globals.heading, styles.heading]}>
              Thomas Sankara
            </Text>
            <Text style={[globals.text, styles.text]}>
              I design and build responsive, cross-browser compatible web
              experiences such as and using Figma, ReactJs and TailwindCSS. I
              have over 4 years experience in front-end web development. I love
              working with APIs because I enjoy how we can get specific data
              from a massive API, and build out an entire fully functioning web
              app.
            </Text>

            <View style={styles.icons}>
              <Image
                source={require("../images/github.png")}
                style={styles.icon}
              />
              <Image
                source={require("../images/twitter.png")}
                style={styles.icon}
              />
              <Image
                source={require("../images/facebook.png")}
                style={styles.icon}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={globals.buttonContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={globals.button}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F2F2",
    borderRadius: 34,
  },
  textContainer: {
    padding: 24,
  },
  heading: {
    textAlign: "center",
    marginBottom: 32,
    marginTop: 16,
  },
  text: {
    textAlign: "center",
    marginBottom: 32,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
