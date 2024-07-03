import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useCallback } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import { useFonts } from "expo-font";
import {firebase} from '../config';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  const navigation = useNavigation();
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

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 40 }}>
        <View>
          <View style={{ backgroundColor: "#2E2C39" }}>
            <View
              style={{
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "#E7E3F1",
                  fontSize: 35,
                  fontFamily: "JuliusSans",
                  marginTop: 10,
                  marginStart: 5,
                }}
              >
                Welcome to Fit.me!
              </Text>
              <Text
                style={{
                  color: "#E7E3F1",
                  fontSize: 14,
                  fontFamily: "LibreCaslon-Regular",
                  marginTop: 10,
                  marginStart: 5,
                }}
              >
                Elevate Your Fitness, Elevate Your Life ✿
              </Text>

              <View
                style={{
                  padding: 15,
                  marginHorizontal: 7,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                  borderRadius: 5,
                  borderColor: "#F1BFC0",
                  borderWidth: 1,
                }}
              >
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#E7E3F1",
                      fontSize: 18,
                      fontFamily: "LibreCaslon-Regular",
                    }}
                  >
                    {workout}
                  </Text>
                  <Text
                    style={{
                      color: "#E7E3F1",
                      fontSize: 17,
                      marginTop: 6,
                      fontFamily: "JuliusSans",
                    }}
                  >
                    WORKOUTS
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#E7E3F1",
                      fontSize: 18,
                      fontFamily: "LibreCaslon-Regular",
                    }}
                  >
                    {calories}
                  </Text>
                  <Text
                    style={{
                      color: "#E7E3F1",
                      fontSize: 17,
                      marginTop: 6,
                      fontFamily: "JuliusSans",
                      textAlign: "center",
                    }}
                  >
                    KCAL
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#E7E3F1",
                      fontSize: 18,
                      fontFamily: "LibreCaslon-Regular",
                    }}
                  >
                    {minutes}
                  </Text>
                  <Text
                    style={{
                      color: "#E7E3F1",
                      fontSize: 17,
                      marginTop: 6,
                      fontFamily: "JuliusSans",
                      marginEnd: 5,
                    }}
                  >
                    MINS
                  </Text>
                </View>
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  style={{
                    width: "95%",
                    height: 150,
                    marginTop: 20,
                    borderRadius: 5,
                    borderColor: "#F1BFC0",
                    borderWidth: 1,
                  }}
                  source={{
                    //uri: "https://img.freepik.com/premium-vector/fitness-exercise-home-illustration_109722-2893.jpg",
                    uri: "https://media.istockphoto.com/id/1205946749/vector/man-and-women-of-different-race-working-out-together-fitness-community-friends-in-gym.jpg?s=170667a&w=0&k=20&c=2hExLRi7SKnf9HKpK8EEyyTnvSIS599bqgGNA84yD3k=",
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: "#E7E3F1",
                    fontSize: 16,
                    fontFamily: "JuliusSans",
                    marginStart: 9,
                    marginTop: 20,
                  }}
                >
                  ⌈ Choose your workout here: ⌋
                </Text>
              </View>
            </View>

            <FitnessCards />

            <Pressable
              onPress={() => {
                firebase.auth().signOut();
                navigation.navigate("Login");
                console.log("clicked");
              }}
              style={{
                backgroundColor: "#2E2C39",
                padding: 10,
                marginStart: 20,
                width: 120,
                marginVertical: 15,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "#F1BFC0",
              }}
            >
              <Text
                style={{
                  color: "#E7E3F1",
                  fontSize: 15,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Log out
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
