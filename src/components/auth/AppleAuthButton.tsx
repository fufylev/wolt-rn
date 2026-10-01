import { Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="logo-apple" size={18} color="#fff" />
      <Text style={styles.buttonText}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: "#000",
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

export default AppleAuthButton;
