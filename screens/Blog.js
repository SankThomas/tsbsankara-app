import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import { globals } from "../styles/globals";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9bnraqna",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-12",
});

export default function Blog({ navigation }) {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const items = await client.fetch(`*[_type == "post"] {
      title,
      slug,
      body,
      categories,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt,
      },
      "name": author->name,
    } | order(publishedAt desc)`);
    setPosts(items);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={globals.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globals.scrollView}
      >
        <View style={globals.header}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>Blog</Text>
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
            gap: 32,
          }}
        >
          {posts.map((post) => (
            <TouchableOpacity
              key={post.title}
              onPress={() => navigation.navigate("Blogpost", post)}
            >
              {post.mainImage && (
                <Image
                  source={{ uri: post.mainImage.asset.url }}
                  style={styles.image}
                />
              )}
              <Text style={globals.heading} className="mt-2">
                {post.title}
              </Text>
            </TouchableOpacity>
          ))}
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
  image: {
    height: 230,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
