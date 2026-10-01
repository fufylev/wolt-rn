import AuthButton from "@/components/auth/AuthButton";
import SmoothInfiniteScroll from "@/components/SmoothInfiniteScroll";
import { Colors, Fonts } from "@/constants/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const openPrivacyStatement = () =>
    WebBrowser.openBrowserAsync("https://explore.wolt.com/en/kaz/privacy");

  return (
    <View style={styles.container}>
      <View style={styles.infiniteContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["transparent", Colors.background]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.logo}
          contentFit="contain"
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>

        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AuthButton
              label="Sign in with Apple"
              icon="logo-apple"
              backgroundColor={Colors.dark}
              textColor={Colors.background}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <AuthButton
              label="Continue with Google"
              icon="logo-google"
              backgroundColor={Colors.google}
              textColor={Colors.background}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <AuthButton label="Other options" />
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(400)} style={styles.footer}>
          <Text style={styles.footerText}>
            Please visit{" "}
            <Text style={styles.footerLink} onPress={openPrivacyStatement}>
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
    paddingVertical: 20,
  },
  infiniteContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    // Columns are taller than the container: pin them to the top and clip
    alignItems: "flex-start",
    gap: 4,
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    height: 200,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    width: "100%",
    height: 48,
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
  footer: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: Colors.mutedLight,
    fontFamily: Fonts.brand,
    textAlign: "center",
    lineHeight: 18,
  },
  footerLink: {
    color: Colors.link,
    textDecorationLine: "underline",
  },
});
