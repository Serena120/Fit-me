import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";
import { useFonts } from "expo-font";
import Icon from "../assets/Images/girlExercise.png";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    JuliusSans: require("../assets/fonts/JuliusSansOne-Regular.ttf"),
    "LibreCaslon-Regular": require("../assets/fonts/LibreCaslonText-Regular.ttf"),
    "LibreCaslon-Bold": require("../assets/fonts/LibreCaslonText-Bold.ttf"),
    "LibreCaslon-Italic": require("../assets/fonts/LibreCaslonText-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E7E3F1" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.container}>
          <Image
            source={Icon}
            style={{
              resizeMode: "cover",
              height: 200,
              width: 300,
              marginVertical: 30,
            }}
          />
          <Text style={{ fontSize: 30, fontFamily: "JuliusSans" }}>Login</Text>

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                style={{ position: "absolute", top: 20, left: 5 }}
                name="mail"
                size={24}
                color="#2E2C39"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                style={{ position: "absolute", top: 20, left: 5 }}
                name="lock"
                size={24}
                color="#2E2C39"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              loginUser(email, password);
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: 300,
              marginTop: 10,
              fontFamily: "LibreCaslon-Regular",
              height: 50,
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: "#2E2C39",
              marginRight: 0,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "LibreCaslon-Regular",
                fontSize: 18,
                color: "#E7E3F1",
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
            style={{ marginTop: 10 }}
          >
            <Text
              style={{
                fontFamily: "LibreCaslon-Regular",
                fontWeight: "500",
                fontSize: 13,
              }}
            >
              Don't have an Account yet? Sign up!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 40,
    width: 295,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "LibreCaslon-Regular",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
