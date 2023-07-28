import React, { useState } from "react";
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
} from "react-native";
import { useDispatch } from "react-redux";
import { authSignInUser } from "../redux/auth/authOperations";

export default LoginScreen = ({navigation}) => {
  const [isShowKeyDown, setIsShowKeyDown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const emailHandler = (text) => {
    setEmail(text);
  };

  const passwordHandler = (text) => {
    setPassword(text);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(authSignInUser(data));
    Keyboard.dismiss();
    resetForm();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/Photo-BG.jpg")}
        >
          <View style={styles.formBox}>
            <Text style={styles.title}>Увійти</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.form} marginBottom={16}>
                <TextInput
                  style={styles.input}
                  marginBottom={16}
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={emailHandler}
                  onFocus={() => {
                    setIsShowKeyDown(true);
                  }}
                ></TextInput>
                <View marginBottom={43}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    value={password}
                    onChangeText={passwordHandler}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                  ></TextInput>
                  <TouchableOpacity style={styles.btnLook}>
                    <Text style={styles.showText}>Показати</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLoad} onPress={handleSubmit}>
                  <Text style={styles.btnLoadText}>Увійти</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.btn}>
              <Text
                style={styles.toLogSpan}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formBox: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 32,
    paddingBottom: 78,
  },
  title: {
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 33,
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    height: 50,
  },
  btnLook: {
    position: "absolute",
    left: "75%",
    top: 16,
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  btnLoad: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    borderRadius: 100,
    textAlign: "center",
    alignItems: "center",
  },
  btnLoadText: {
    color: "#ffffff",
    fontWeight: 400,
    fontSize: 16,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
  },

  toLogSpan: {
    color: "#1B4371",
    borderBottomWidth: 1,
    borderBottomColor: "#1B4371",
  },
  focus: {
    backgroundColor: "red",
  },
  showText: {
    color: "#1B4371",
  },
});
