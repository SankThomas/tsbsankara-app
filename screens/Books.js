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

const items = [
  {
    path: "htmlcourse.png",
    title: "HTML and CSS Course",
    description:
      "Learn modern web development using HTML5 semantics by building a Model Hotel Website and deploying it to the internet.",
    runtime: "5hr 58mins",
    price: "$19.99",
    objectives: [
      "Build a modern website",
      "Deploy websites to the internet",
      "Learn modern HTML5 Semantics",
      "Learn moden web development practices",
    ],
    instructor: [
      {
        name: "Thomas Sankara",
        imagepath: "author.png",
        about:
          "Front-end web developer with over 4 years experience in the modern web development scene, practicing ReactJs and TailwindCSS.",
      },
    ],
  },
  {
    path: "reactjs.jpeg",
    title: "20 ReactJs Projects",
    description:
      "Build 20 ReactJs Projects with increasing complexity and functionality. This is a beginner friendly course that you can learn at any level.",
    runtime: "12hours",
    price: "$94.99",
    objectives: [
      "Establish ReactJs fundamentals",
      "Deploy React web apps to the internet",
      "Learn best practices for React",
    ],
    instructor: [
      {
        name: "Thomas Sankara",
        imagepath: "author.png",
        about:
          "Front-end web developer with over 4 years experience in the modern web development scene, practicing ReactJs and TailwindCSS.",
      },
    ],
  },
];

export default function Books({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>eBooks and Courses</Text>
          <TouchableOpacity>
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
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("SingleBooks", item)}
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
                source={require(`../images/books/${item.path}`)}
              >
                <Text style={globals.imageTitle}>{item.title}</Text>
              </ImageBackground>
              <Text style={globals.text}>{item.description}</Text>
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
    fontWeight: "bold",
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
