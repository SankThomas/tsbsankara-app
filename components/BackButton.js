import { Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function BackButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Entypo name="back" size={24} color="black" />
    </TouchableOpacity>
  );
}
