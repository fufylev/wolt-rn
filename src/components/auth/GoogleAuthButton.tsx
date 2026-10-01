import { Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const GoogleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="logo-google" size={18} color="#fff" />
      <Text style={styles.buttonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: "#4285f4",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 4,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: Fonts.brandBold,
  },
});

export default GoogleAuthButton;
