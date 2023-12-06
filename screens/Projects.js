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
import BackButton from "../components/BackButton";
import { projects } from "../data/data";

export default function Projects({ navigation }) {
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

        <View style={globals.cards}>
          {projects.map((project, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("SingleProject", project)}
              style={styles.card}
            >
              <View>
                <Image
                  borderRadius={30}
                  style={styles.image}
                  source={{
                    uri: project.path,
                  }}
                />
                <Text style={[globals.title, styles.title]}>
                  {project.title}
                </Text>
                <Text style={globals.text}>{`${project.description.substring(
                  0,
                  100
                )}...`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },
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
