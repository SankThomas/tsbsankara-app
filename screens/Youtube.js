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
import YoutubePlayer from "react-native-youtube-iframe";
import { videos } from "../data/data";

export default function Youtube({ navigation }) {
  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>YouTube</Text>
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
          <Text style={[globals.text, styles.text]}>
            Find more awesome videos on my YouTube channel, @tsbsankara.
            Subscribe right next to the like button.
          </Text>

          <View
            style={{
              gap: 32,
            }}
          >
            {videos.map((video, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#ececec",
                  padding: 16,
                  borderRadius: 16,
                }}
              >
                <YoutubePlayer height={180} play={false} videoId={video.id} />
                <Text style={[globals.title]}>{video.title}</Text>
              </View>
            ))}
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
  text: {
    textAlign: "center",
    marginBottom: 32,
  },
});
