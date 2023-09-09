import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Books from "./screens/Books";
import Contact from "./screens/Contact";
import Portfolio from "./screens/Portfolio";
import Projects from "./screens/Projects";
import SingleBlog from "./screens/SingleBlog";
import SingleBooks from "./screens/SingleBooks";
import SinglePortfolio from "./screens/SinglePortfolio";
import SingleProject from "./screens/SingleProject";
import Youtube from "./screens/Youtube";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />

      <Stack.Navigator
        initialRouteName="Home"
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
        <Stack.Screen name="SingleBlog" component={SingleBlog} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="SingleBooks" component={SingleBooks} />
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
