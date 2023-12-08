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

export default function Book({ navigation, route }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />

          {route.params.title.length > 16 ? (
            <Text style={globals.title}>{`${route.params.title.substring(
              0,
              16
            )}...`}</Text>
          ) : (
            <Text style={globals.title}>{route.params.title}</Text>
          )}

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
          <Image style={styles.image} source={{ uri: route.params.path }} />
          <Text style={[globals.title, styles.title]}>
            {route.params.title}
          </Text>
          <Text style={globals.text}>{route.params.description}</Text>

          <Text style={[globals.text, styles.text]}>
            Length: {route.params.length}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Text style={globals.heading}>{route.params.price}</Text>
            <TouchableOpacity style={globals.buttonContainer}>
              <Text style={globals.button}>Buy Book</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={{
              marginTop: 32,
              backgroundColor: "#222",
              padding: 16,
              borderRadius: 16,
            }}
          >
            <Text style={[globals.title, styles.title, styles.lightText]}>
              About the author
            </Text>
            <Image
              source={require("../assets/icon.png")}
              style={[globals.icon, styles.icon]}
            />
            <Text style={[globals.title, styles.title, styles.lightText]}>
              {route.params.instructor[0].name}
            </Text>
            <Text style={[globals.text, styles.lightText]}>
              {route.params.instructor[0].about}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#222",
    fontFamily: "grotesk",
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
  icon: {
    marginVertical: 16,
  },
  text: {
    marginTop: 16,
  },
  lightText: {
    color: "#fff",
  },
});
