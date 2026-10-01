import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const iconDataSets = {
  set1: [
    { emoji: "🍕", color: "#FFE5CC" },
    { emoji: "🍔", color: "#F4D03F" },
    { emoji: "🍟", color: "#F8D7DA" },
    { emoji: "🌮", color: "#D5EDDA" },
    { emoji: "🍗", color: "#FADBD8" },
  ],
  set2: [
    { emoji: "🎮", color: "#D1ECF1" },
    { emoji: "🎧", color: "#E2E3E5" },
    { emoji: "☕", color: "#F4D03F" },
    { emoji: "🍿", color: "#FFE5CC" },
    { emoji: "🥤", color: "#F8D7DA" },
  ],
  set3: [
    { emoji: "🍰", color: "#FADBD8" },
    { emoji: "🍦", color: "#D1ECF1" },
    { emoji: "🍪", color: "#FFE5CC" },
    { emoji: "🎲", color: "#D5EDDA" },
    { emoji: "🕹️", color: "#E2E3E5" },
  ],
};

const ITEM_HEIGHT = 160;
const SCROLL_SPEED = 20; // pixels per second
const GAP = 10; // gap between items

interface SmoothInfiniteScrollProps {
  scrollDirection?: "up" | "down";
  iconSet?: "set1" | "set2" | "set3";
}

const SmoothInfiniteScroll = ({
  scrollDirection = "down",
  iconSet = "set1",
}: SmoothInfiniteScrollProps) => {
  const scrollY = useSharedValue(0);

  const itemData = iconDataSets[iconSet];
  const items = [...itemData, ...itemData];
  // Height of one set (item + gap after it). The second copy starts exactly
  // this far below the first, so jumping back by this distance is invisible.
  const loopHeight = itemData.length * (ITEM_HEIGHT + GAP);

  useEffect(() => {
    const duration = (loopHeight / SCROLL_SPEED) * 1000; // convert to milliseconds
    const from = scrollDirection === "down" ? 0 : loopHeight;
    const to = scrollDirection === "down" ? loopHeight : 0;

    // withRepeat jumps back to `from` on every cycle by itself,
    // so the shared value never has to be reset manually
    scrollY.set(from);
    scrollY.set(
      withRepeat(
        withTiming(to, { duration, easing: Easing.linear }),
        -1, // infinite repeats
        false, // don't reverse
      ),
    );
  }, [scrollDirection, loopHeight, scrollY]);

  // Moving the column with transform is cheaper than scrolling a ScrollView:
  // the already rendered layer is just shifted on the GPU
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -scrollY.get() }],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {items.map((item, i) => (
        <View
          key={i}
          style={[styles.iconContainer, { backgroundColor: item.color }]}
        >
          <Text style={styles.iconText}>{item.emoji}</Text>
        </View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: GAP,
    paddingVertical: 20,
  },
  iconContainer: {
    width: 160,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
    boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
  },
  iconText: {
    fontSize: 48,
  },
});

export default SmoothInfiniteScroll;
