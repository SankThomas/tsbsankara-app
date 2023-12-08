import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Courses from "./screens/Courses";
import Course from "./screens/Course";
import Contact from "./screens/Contact";
import Portfolio from "./screens/Portfolio";
import Projects from "./screens/Projects";
import SingleBlog from "./screens/SingleBlog";
import SinglePortfolio from "./screens/SinglePortfolio";
import SingleProject from "./screens/SingleProject";
import Youtube from "./screens/Youtube";
import Blogpost from "./screens/Blogpost";
import Books from "./screens/Books";
import Book from "./screens/Book";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    inter: require("./assets/fonts/Inter-Regular.ttf"),
    grotesk: require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Blogpost" component={Blogpost} />
        <Stack.Screen name="SingleBlog" component={SingleBlog} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="SinglePortfolio" component={SinglePortfolio} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="SingleProject" component={SingleProject} />
        <Stack.Screen name="Youtube" component={Youtube} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
