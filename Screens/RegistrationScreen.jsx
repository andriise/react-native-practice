import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import addSvg from "../images/add.svg";
import { SvgXml } from "react-native-svg";

const xml = `
 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>
</svg>
`;

export default RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../images/Photo-BG.jpg")}
        >
          <View style={styles.formBox}>
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.addAvatarBtn}>
                <SvgXml
                  xml={xml}
                  width="25"
                  height="25"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form} marginBottom={16}>
              <TextInput
                style={styles.input}
                marginBottom={16}
                placeholder="Логін"
              ></TextInput>
              <TextInput
                style={styles.input}
                marginBottom={16}
                placeholder="Адреса електронної пошти"
              ></TextInput>
              <View marginBottom={43}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Пароль"
                ></TextInput>
                <TouchableOpacity style={styles.btnLook}>
                  <Text style={styles.showText}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnLoad}>
                <Text style={styles.btnLoadText}>Зареєстуватися</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.toLog}>Вже є акаунт? Увійти</Text>
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
    paddingTop: 92,
    paddingBottom: 78,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    left: "35%",
    top: -60,
  },
  addAvatarBtn: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    position: "absolute",
    right: -22,
    bottom: 14,
    borderWidth: 1,
    borderColor: "transparent",

  },


  title: {
    color: "#212121",
    fontWeight: "500",
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
    left: "70%",
    top: 16,
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  showText: {
    color: "#1B4371",
  },
  btnLoad: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    borderRadius: 100,
    textAlign: "cebter",
    alignItems: "center",
  },
  btnLoadText: {
    color: "#ffffff",
    fontWeight: 400,
    fontSize: 16,
  },
  toLog: {
    color: "#1B4371",
    textAlign: "center",
  },
  focus: {
    backgroundColor: "red",
  },
});
