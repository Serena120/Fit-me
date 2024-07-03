import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { firebase } from "../config";
import { useFonts } from "expo-font";
import Icon from "../assets/Images/Signup.png";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    JuliusSans: require("../assets/fonts/JuliusSansOne-Regular.ttf"),
    "LibreCaslon-Regular": require("../assets/fonts/LibreCaslonText-Regular.ttf"),
    "LibreCaslon-Bold": require("../assets/fonts/LibreCaslonText-Bold.ttf"),
    "LibreCaslon-Italic": require("../assets/fonts/LibreCaslonText-Italic.ttf"),
  });

  registerUser = async (email, password) => {
    try{
      await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
      navigation.navigate("Login");
    }catch(error) {
        alert(error.message);
      };
  };

  /*const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);*/

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E7E3F1" }}>
      <ScrollView
        style={{ flex: 1, marginTop: 0 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={{ marginTop: 80, alignItems: "center" }}>
          <Image
            source={Icon}
            style={{ resizeMode: "cover", height: 280, width: 280 }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              marginTop: 0,
              fontFamily: "JuliusSans",
              color: "#2E2C39",
            }}
          >
            SignUp
          </Text>

          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                style={{ position: "absolute", top: 20, left: 5 }}
                name="mail"
                size={24}
                color="black"
              />
              <TextInput
                style={{
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
                }}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather
                style={{ position: "absolute", top: 20, left: 5 }}
                name="lock"
                size={24}
                color="black"
              />
              <TextInput
                style={{
                  paddingTop: 20,
                  paddingBottom: 10,
                  paddingLeft: 40,
                  width: 295,
                  fontSize: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: "#000",
                  marginBottom: 10,
                  textAlign: "left",
                  fontFamily: "LibreCaslon-Regular",
                }}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => 
              registerUser(email, password)
            }
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
              Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ marginTop: 10 }}
          >
            <Text
              style={{
                fontFamily: "LibreCaslon-Regular",
                fontWeight: "500",
                fontSize: 13,
              }}
            >
              Already have an Account? Log in!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 300,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    textAlign: "center",
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
