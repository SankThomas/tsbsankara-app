import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { globals } from "../styles/globals";

export default function PortfolioImages({ navigation }) {
  return (
    <View style={globals.cards}>
      <TouchableOpacity onPress={() => navigation.navigate("Portfolio")}>
        <View>
          <ImageBackground
            borderRadius={30}
            style={{
              height: 230,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              resizeMode: "cover",
              width: "100%",
            }}
            source={require("../images/projects.png")}
          >
            <Text style={globals.imageTitle}>Clipboard Landing Page</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}
