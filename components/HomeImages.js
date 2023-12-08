import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";

export default function HomeImages({ navigation }) {
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
            source={require("../images/portfolio.png")}
          >
            <Text style={globals.imageTitle}>Portfolio</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Youtube")}>
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
            source={require("../images/youtube.png")}
          >
            <Text style={globals.imageTitle}>YouTube</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Books")}>
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
            source={{
              uri: "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          >
            <Text style={globals.imageTitle}>Books</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
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
            source={{
              uri: "https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          >
            <Text style={globals.imageTitle}>Courses</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Projects")}>
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
            <Text style={globals.imageTitle}>projects</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Blog")}>
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
            source={require("../images/blog.png")}
          >
            <Text style={globals.imageTitle}>blog</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
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
            source={require("../images/about.png")}
          >
            <Text style={globals.imageTitle}>about</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
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
            source={require("../images/contact.png")}
          >
            <Text style={globals.imageTitle}>contact me</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}
