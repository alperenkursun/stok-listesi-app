import { Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-gesture-handler";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
