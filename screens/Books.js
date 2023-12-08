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
import { books } from "../data/data";

export default function Books({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Books</Text>
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
          {books.map((book, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Book", book)}
            >
              <Image
                borderRadius={30}
                style={{
                  height: 230,
                  alignItems: "center",
                  justifyContent: "center",
                  resizeMode: "cover",
                  width: "100%",
                  marginTop: 32,
                  marginBottom: 16,
                }}
                source={{ uri: book.path }}
              />
              <Text style={globals.title}>{book.title}</Text>
              <Text style={globals.text}>{book.description}</Text>
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
