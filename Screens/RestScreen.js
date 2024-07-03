import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const RestScreen = () => {
    const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);
  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1)
    }, 1000);
  }
  useEffect(() => {
    startTime();
    //clean up
    return () => clearTimeout(timer);
  },)

  const [fontsLoaded, fontError] = useFonts({
    'JuliusSans': require("../assets/fonts/JuliusSansOne-Regular.ttf"),
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
    <SafeAreaView style={{flex:1}}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/2f/3e/44/2f3e4442b208a07630d234b06c7d1abd.jpg",
        }}
        style={{ width: "100%", height: 450, borderWidth:2,borderRadius:2, borderColor:'#F1BFC0' }}
      />
      <Text
        style={{
          fontSize: 30,
          marginTop: 50,
          textAlign: "center",
          fontFamily:'JuliusSans'
        }}
      >
        Take a Break!
      </Text>
      <Text style={{
          fontSize: 40,
          marginTop: 40,
          textAlign: "center",
          fontFamily:"LibreCaslon-Regular"
        }}>{timeLeft}</Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
