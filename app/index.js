import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import styles from "../assets/styles/App.style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.splashScreenContainer}>
      <StatusBar style="light"/>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("main/index");
        }}
      >
        <Image source={require("../assets/icon.png")} style={styles.splashIcon}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
