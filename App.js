import { useCallback } from "react";
import { StyleSheet } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/HomeScreens/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Roboto/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
        <Main />

    </Provider>
  );
}

{
  /* <NavigationContainer>
  <MainStack.Navigator initialRouteName="Registration">
    <MainStack.Screen
      name="RegistrationScreen"
      component={RegistrationScreen}
      options={{ headerShown: false }}
    ></MainStack.Screen>
    <MainStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    ></MainStack.Screen>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
</NavigationContainer>; */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
