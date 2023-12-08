import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import BackButton from "../components/BackButton";
import { globals } from "../styles/globals";
import { courses } from "../data/data";

export default function Courses({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Courses</Text>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Image
              source={require("../assets/icon.png")}
              style={globals.icon}
            />
          </TouchableOpacity>
        </View>

        <Text style={globals.text}>
          I write. I program. I poet. I teach. Find useful resources below.
        </Text>

        <View style={styles.cards}>
          {courses.map((course, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Course", course)}
            >
              <ImageBackground
                borderRadius={30}
                style={{
                  height: 230,
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  resizeMode: "cover",
                  width: "100%",
                  marginTop: 32,
                  marginBottom: 16,
                }}
                source={{ uri: course.path }}
              >
                <Text style={globals.imageTitle}>{course.title}</Text>
              </ImageBackground>
              <Text style={globals.text}>{course.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginBottom: 32,
  },
  title: {
    color: "#222",
    fontSize: 18,
    fontFamily: "grotesk",
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
