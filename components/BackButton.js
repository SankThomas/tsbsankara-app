import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={24} color="#222222" />
    </TouchableOpacity>
  );
}
