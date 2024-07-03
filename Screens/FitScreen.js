import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useContext, useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";
import { useFonts } from "expo-font";

const FitScreen = () => {
  const route = useRoute();
  //console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  //console.log(current, "first exercise");
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);
  console.log(completed, "completed exercise");

  const [fontsLoaded, fontError] = useFonts({
    JuliusSans: require("../assets/fonts/JuliusSansOne-Regular.ttf"),
    "LibreCaslon-Regular": require("../assets/fonts/LibreCaslonText-Regular.ttf"),
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
    <SafeAreaView
      style={{ flex: 1, paddingTop: 50, backgroundColor: "#2E2C39" }}
    >
      <View
        style={{
          margin: 15,
          borderRadius: 1,
          borderWidth: 2,
          borderColor: "#6E8880",
          padding: 0,
        }}
      >
        <Image
          source={{ uri: current.image }}
          style={{
            height: 350,
            width: "100%",
            padding: 10,
            borderRadius: 10,
          }}
        />
      </View>

      <View
        style={{
          marginHorizontal: 15,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#6E8880",
        }}
      >
        <Text
          style={{
            marginVertical: 15,
            fontSize: 28,
            marginRight: "auto",
            marginLeft: "auto",
            color: "#6E8880",
            fontFamily: "JuliusSans",
          }}
        >
          {current.name}
        </Text>
        <Text
          style={{
            marginBottom: 20,
            marginRight: "auto",
            marginLeft: "auto",
            fontSize: 34,
            fontFamily: "monospace",
            fontWeight: "600",
            color:'#6E8880'
          }}
        >
          x{current.sets}
        </Text>
      </View>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            width: 130,
            marginTop: 10,
            height: 45,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "#6E8880",
            alignItems: "center",
            borderRadius: 5,
            marginStart: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#E7E3F1",
              textAlign: "center",
              fontFamily: "LibreCaslon-Regular"
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            width: 130,
            marginTop: 10,
            height: 45,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "#6E8880",
            alignItems: "center",
            borderRadius: 5,
            marginStart: 15,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#E7E3F1",
              textAlign: "center",
              fontFamily: "LibreCaslon-Regular",
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            padding: 10,
            marginTop:30,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#AFA3D5",
            width: 160,
          }}
        >
          <Text
            style={{
              color: "#AFA3D5",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            PREVIOUS
          </Text>
        </Pressable>
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              padding: 10,
              borderRadius: 5,
              marginTop:30,
              borderWidth: 1,
              borderColor: "#AFA3D5",
              marginLeft:5,
              width: 160,
            }}
          >
            <Text
              style={{
                color: "#AFA3D5",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              padding: 10,
              borderRadius: 5,
              marginTop:30,
              borderWidth: 1,
              borderColor: "#AFA3D5",
              marginLeft:5,
              width: 160,

            }}
          >
            <Text
              style={{
                color: "#AFA3D5",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
