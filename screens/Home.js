import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeImages from "../components/HomeImages";

const data = [
  {
    image: "../assets/icon.png",
    title: "Portfolio",
  },
  {
    image: "../assets/splash.png",
    title: "YouTube",
  },
];

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <Text style={globals.heading}>Welcome</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/icon.png")}
              style={globals.icon}
            />
          </TouchableOpacity>
        </View>

        <HomeImages navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
