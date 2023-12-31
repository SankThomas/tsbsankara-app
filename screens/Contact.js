import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import BackButton from "../components/BackButton";
import { globals } from "../styles/globals";

export default function Youtube({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Contact Me</Text>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Image
              source={require("../assets/icon.png")}
              style={globals.icon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginBottom: 32,
          }}
        >
          <Text style={[globals.heading, styles.heading]}>For enquiries</Text>
          <Text style={[globals.text, styles.text]}>tsbsankara@gmail.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#222",
    fontSize: 18,
    fontFamily: "grotesk",
    marginTop: 16,
    marginBottom: 8,
  },
  heading: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 16,
  },
});
