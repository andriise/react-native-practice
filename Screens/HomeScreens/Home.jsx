import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useState } from "react";
import {
  Ionicons,
  Feather,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

export default Home = ({ navigation }) => {
  const [bar, setBar] = useState(true);
  return (
    <Tabs.Navigator screenOptions={styles.container}>
      <Tabs.Screen
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.grid}>
                <SimpleLineIcons name="grid" size={24} color={color} />
              </View>
            );
          },

          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
          },
          headerTitle: { color: "#212121" },

          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                marginRight={16}
                marginBottom={10}
              />
            </TouchableOpacity>
          ),
          tabBarStyle: bar
            ? {
                display: "flex",
                height: 83,
                paddingTop: 9,
                paddingBottom: 34,
              }
            : { display: "none" },
        })}
        name="Публікації"
        // component={PostsScreen}
      >
        {(props) => <PostsScreen {...props} bar={setBar} />}
      </Tabs.Screen>
      <Tabs.Screen
        backBehavior="history"
        options={() => ({
          tabBarIcon: () => {
            return (
              <View style={styles.plus}>
                <AntDesign name="plus" size={24} color={"white"} />
              </View>
            );
          },
          tabBarHideOnKeyboard: true,
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            
          },
          headerTitle: { color: "#212121" },

          headerLeft: () => (
            <TouchableOpacity
              onPress={navigation.goBack}
              style={{ marginLeft: 16 }}
            >
              <Feather name="arrow-left" size={24} color="#212121CC" />
            </TouchableOpacity>
          ),
        })}
        name={"Створити публікацію"}
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.user}>
                <Feather name="user" size={24} color={color} />
              </View>
            );
          },
          headerShown: false,
        })}
        name={"Profile"}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    headerStyle: {
      height: 88,
      borderBottomWidth: 1,
      borderColor: "#BDBDBD",
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 17,
      color: "#212121",
      fontFamily: "Roboto-Regular",
    },
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 83,
      paddingTop: 9,
      paddingBottom: 34,
    },
    tabBarInactiveTintColor: "#212121",
  },
  btnLogOut: {
    marginRight: 16,
  },

  grid: {
    width: 40,
    height: 40,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 31,
    marginLeft: 31,
  },
  user: {
    width: 40,
    height: 40,
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <Tabs.Navigator
//   screenOptions={styles.container}
//   component={<View style={styles.line}></View>}
// >
//   <Tabs.Screen
//     options={{
//       tabBarIcon: ({ focused, color, size }) => {
//         return (
//           <View style={styles.grid}>
//             <Feather name="grid" size={24} color="black" />
//           </View>
//         );
//       },
//       headerTitleStyle: {
//         fontSize: 17,
//         lineHeight: 22,
//         marginBottom: 10,
//       },
//       headerTitle: { color: "#212121" },

//       headerRight: () => (
//         <TouchableOpacity onPress={signOut}>
//           <Feather
//             name="log-out"
//             size={24}
//             color="#BDBDBD"
//             marginRight={16}
//             marginBottom={10}
//           />
//         </TouchableOpacity>
//       ),
//     }}
//     name="Posts"
//     component={PostsScreen}
//   />

//   <Tabs.Screen
//     options={{
//       tabBarIcon: ({ focused, color, size }) => {
//         return (
//           <View style={styles.plast}>
//             <Ionicons name="add" size={24} color="#FFFFFF" />
//           </View>
//         );
//       },
//       headerTitleStyle: {
//         fontSize: 17,
//         lineHeight: 22,
//         marginBottom: 10,
//       },
//       headerTitle: { color: "#212121" },
//       headerLeft: () => (
//         <TouchableOpacity onPress={signOut}>
//           <AntDesign
//             name="arrowleft"
//             size={24}
//             color="#212121"
//             marginLeft={16}
//             marginBottom={10}
//           />
//         </TouchableOpacity>
//       ),
//     }}
//     name="CreatePost"
//     component={CreatePostsScreen}
//   />

//   <Tabs.Screen
//     options={{
//       tabBarIcon: ({ focused, color, size }) => {
//         return (
//           <View style={styles.user}>
//             <Feather name="user" size={24} color="black" />
//           </View>
//         );
//       },
//       headerShown: false,
//     }}
//     name="ProfileScreen"
//     component={ProfileScreen}
//   />
// </Tabs.Navigator>

// const styles = StyleSheet.create({
//   grid: {
//     width: 40,
//     height: 40,
//     marginLeft: "auto",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   plast: {
//     width: 70,
//     height: 40,
//     backgroundColor: "#FF6C00",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//     marginRight: 31,
//     marginLeft: 31,
//   },

//   user: {
//     width: 40,
//     height: 40,
//     marginRight: "auto",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   line: {
//     borderWidth: 0.5,
//     backgroundColor: "#212121",
//     borderRadius: 100,
//     width: 134,
//   },

//   container: {
//     headerStyle: {
//       height: 83,
//       borderBottomWidth: 1,
//       borderColor: "#BDBDBD",
//     },
//     headerTitleAlign: "center",
//     headerTitleStyle: {
//       fontSize: 17,
//       color: "#212121",
//       fontFamily: "Roboto-Regular",
//     },
//     tabBarShowLabel: false,
//     tabBarStyle: {
//       height: 83,
//       paddingTop: 9,
//       paddingBottom: 34,
//     },
//     tabBarInactiveTintColor: "#212121",
//   },
// });
