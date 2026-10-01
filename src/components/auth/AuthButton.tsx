import { Colors, Fonts } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface AuthButtonProps {
  label: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
}

const AuthButton = ({
  label,
  icon,
  backgroundColor = Colors.surface,
  textColor = Colors.muted,
  onPress,
}: AuthButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
    >
      {icon && <Ionicons name={icon} size={18} color={textColor} />}
      <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: Fonts.brandBold,
  },
});

export default AuthButton;
