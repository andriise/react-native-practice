import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SvgXml } from "react-native-svg";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const xml = `
 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>
</svg>
`;

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default ProfileScreen = () => {
  const [state, setState] = useState(initialState);
  const [userPosts, setUserPosts] = useState([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../images/Photo-BG.jpg")}
      >
        <View style={styles.contentBox}>
          <View style={styles.containerFoto}>
            <Image
              style={{ borderRadius: 16 }}
              source={require("../../images/Natalia.jpg")}
            />
          </View>
          <TouchableOpacity>
            <Image
              style={styles.deleteBtn}
              source={require("../../images/delete.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              style={styles.logOut}
              name="log-out"
              size={24}
              color="#BDBDBD"
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, textAlign: "center" }}>
            Natalia Romanova
          </Text>

          <FlatList
            data={userPosts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.boxPhoto}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.photo}
                ></Image>
                <Text>{item.namePost}</Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 8,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Comments", { postId: item.id })
                    }
                  >
                    <EvilIcons name="comment" size={24} color="#FF6C00" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Likes", { postId: item.id })
                    }
                  >
                    <Feather name="thumbs-up" size={24} color="#FF6C00" />
                    <Text>item.likeCounter</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    title="Map"
                    onPress={() =>
                      navigation.navigate("Map", {
                        location: item.locationPost,
                      })
                    }
                  >
                    <View style={styles.locationBox}>
                      <EvilIcons name="location" size={30} color="#BDBDBD" />
                      <Text>Location</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },

  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  boxPhoto: {
    marginBottom: 8,
    alignItems: "center",
  },
  photo: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  contentBox: {
    maxHeight: "70%",
    position: "relative",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
  },

  logOut: {
    position: "absolute",
    top: -40,
    right: 16,
  },


  locationBox: {
    display: "flex",
    flexDirection: "row",
  },

  containerFoto: {
    position: "relative",
    alignSelf: "center",
    marginTop: -92,
    marginBottom: 0,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },

  deleteBtn: {
    position: "absolute",
    bottom: -10,
    right: 90,
  },
});
