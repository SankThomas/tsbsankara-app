import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import { images } from "../data/data";

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
              source={{
                uri: image.path,
              }}
            />
            <Text style={[globals.title, styles.title]}>{image.title}</Text>
            <Text style={globals.text}>{`${image.description.substring(
              0,
              100
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
    resizeMode: "cover",
    width: "100%",
    borderRadius: 20,
  },
});
