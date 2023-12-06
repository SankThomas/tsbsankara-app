import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globals } from "../styles/globals";
import { SafeAreaView } from "react-native-safe-area-context";
import PortfolioImages from "../components/PortfolioImages";
import BackButton from "../components/BackButton";

export default function Portfolio({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={globals.title}>Portfolio</Text>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Image
              source={require("../assets/icon.png")}
              style={globals.icon}
            />
          </TouchableOpacity>
        </View>

        <PortfolioImages navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
