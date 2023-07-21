

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
  Alert,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default LoginScreen = () => {
  const [state, setState] = useState(initialState);

  const onLogin = () => {
    Alert.alert(`Credentials, ${state.email}!`);
    Keyboard.dismiss();
    console.log(state);
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
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                ></TextInput>
                <View marginBottom={43}>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  ></TextInput>
                  <TouchableOpacity style={styles.btnLook}>
                    <Text style={styles.showText}>Показати</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLoad}>
                  <Text style={styles.btnLoadText} onPress={onLogin}>
                    Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.toLogSpan}>
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
