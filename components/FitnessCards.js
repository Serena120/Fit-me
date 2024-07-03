import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7, borderWidth:1,borderColor:'#AFA3D5' }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "#6E8880",
              fontSize: 16,
              fontWeight:'bold',
              fontFamily: "monospace",
              left: 20,
              top: 20,
            }}
          >
            ⌈{item.name}⌋
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});