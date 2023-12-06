import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import BackButton from "../components/BackButton";
import { globals } from "../styles/globals";

export default function SinglePortfolio({ navigation, route }) {
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

        <View>
          <Image
            borderRadius={30}
            style={styles.image}
            source={{
              uri: route.params.path,
            }}
          />
          <Text style={[globals.title, styles.title]}>
            {route.params.title}
          </Text>
          <Text style={globals.text}>{route.params.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
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
});
