import { Stack } from "expo-router";

export default function RootNav() {
  return (
    <Stack>
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
    </Stack>
  );
}
