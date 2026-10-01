import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import { Fonts } from "@/constants/theme";
import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const openWebBrouser = async () => {
    WebBrowser.openBrowserAsync("https://explore.wolt.com/en/kaz/privacy");
  };

  return (
    <View style={styles.container}>
      <View style={styles.infiniteContainer}></View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.logo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>

        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(400)} style={styles.footer}>
          <Text style={styles.footerText}>
            Please visit{" "}
            <Text style={styles.footerLink} onPress={openWebBrouser}>
              Wolt Privacy Statement
            </Text>{" "}
            and to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
  },
  infiniteContainer: {
    flex: 0.8,
  },
  logo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  button: {
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    paddingVertical: 17,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 4,
  },
  buttonText: {
    fontSize: 18,
    color: "#666",
    fontFamily: Fonts.brandBold,
  },
  footer: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    fontFamily: Fonts.brand,
    textAlign: "center",
    lineHeight: 18,
  },
  footerLink: {
    color: "#4285f4",
    textDecorationLine: "underline",
  },
});
