import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { globals } from "../styles/globals";

const images = [
  {
    path: "clipboard.png",
    title: "Clipboard landing page",
    description:
      "Clipboard allows you to access anything you copy from any website. Simply install the browser extension and get access to everything you have ever copied. This might be a good thing or a bad thing depending on what you copy. :wink",
  },
  {
    path: "blogr.png",
    title: "Blogr Website",
    description:
      "Clipboard allows you to access anything you copy from any website. Simply install the browser extension and get access to everything you have ever copied. This might be a good thing or a bad thing depending on what you copy. :wink",
  },
  {
    path: "kodidi-consulting.png",
    title: "Kodidi Consulting",
    description:
      "Clipboard allows you to access anything you copy from any website. Simply install the browser extension and get access to everything you have ever copied. This might be a good thing or a bad thing depending on what you copy. :wink",
  },
  {
    path: "mental-health-zambia.png",
    title: "Mental Health Care Zambia",
    description:
      "Clipboard allows you to access anything you copy from any website. Simply install the browser extension and get access to everything you have ever copied. This might be a good thing or a bad thing depending on what you copy. :wink",
  },
  {
    path: "twembo.png",
    title: "Twembochi Mununga Portfolio",
    description:
      "Clipboard allows you to access anything you copy from any website. Simply install the browser extension and get access to everything you have ever copied. This might be a good thing or a bad thing depending on what you copy. :wink",
  },
  {
    path: "wahu.png",
    title: "Margaret Wahu Portfolio",
    description:
      "Clipboard allows you to access anything you copy from any website. Simply install the browser extension and get access to everything you have ever copied. This might be a good thing or a bad thing depending on what you copy. :wink",
  },
];

export default function PortfolioImages({ navigation }) {
  return (
    <View style={globals.cards}>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate("SinglePortfolio", image)}
          style={styles.card}
        >
          <View>
            <Image
              borderRadius={30}
              style={styles.image}
              source={require(`../images/portfolio/${image.path}`)}
            />
            <Text style={[globals.title, styles.title]}>{image.title}</Text>
            <Text style={globals.text}>{`${image.description.substring(
              0,
              100,
            )}...`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    padding: 8,
    borderRadius: 20,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
  },
  image: {
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    resizeMode: "cover",
    width: "100%",
    borderRadius: 20,
  },
});
