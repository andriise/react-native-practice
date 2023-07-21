import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    // <RegistrationScreen style={styles.container} />
    <LoginScreen style={styles.container} />
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
