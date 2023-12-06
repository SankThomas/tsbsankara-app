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
import { PortableText } from "@portabletext/react-native";

export default function Blogpost({ navigation, route }) {
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
          {route.params.mainImage.asset.url && (
            <Image
              borderRadius={30}
              style={styles.image}
              source={{
                uri: route.params.mainImage.asset.url,
              }}
            />
          )}
          <Text style={[globals.heading, styles.heading]}>
            {route.params.title}
          </Text>

          <View>
            <PortableText value={route.params.body} />
          </View>
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
    marginTop: 16,
  },
  text: {
    marginTop: 16,
  },
  image: {
    height: 230,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
