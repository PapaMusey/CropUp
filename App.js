import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LandingScreen from "./screens/LandingScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LogIn from "./screens/LogIn";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import FarmListScreen from "./screens/FarmListScreen";
import AddFarm from "./screens/AddFarm";
import Security from "./screens/Security";
import Settings from "./screens/Settings";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import FAQ from "./screens/FAQ";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FarmListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
