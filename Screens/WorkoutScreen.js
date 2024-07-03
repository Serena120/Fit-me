import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  useAnimatedValue,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const WorkoutScreen = () => {
  const route = useRoute();
  //console.log(route.params);
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <>
      <View style={{ backgroundColor: "#E7E3F1", padding: 0 }}>
        <Image
          style={{
            width: "100%",
            height: 215,
            borderWidth: 1,
            borderColor: "#F1BFC0",
            borderRadius: 1,
          }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 30, left: 20 }}
          name="arrow-back"
          size={28}
          color="#6E8880"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#2E2C39", padding: 0 }}
      >
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{ marginVertical: 0, flexDirection: "row", alignItems: "center",borderRadius:1, borderWidth:1,borderColor:'#F1BFC0' }}
            key={index}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color:'#E7E3F1' }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 16, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>

            {completed.includes(item.name) ? (
              <Feather
                style={{left:295, position:'absolute'}}
                name="check"
                size={24}
                color="#F1BFC0"
              />
            ) : null}
          </Pressable>
            
        ))}
      </ScrollView>

      <View
        style={{
          backgroundColor: "#2E2C39",
          width: "100%",
          borderWidth: 1,
          borderColor: "#2E2C39",
          borderRadius: 0,
          height:80
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("Fit", {
              excersises: route.params.excersises,
            });
            setCompleted([]);
          }}
          style={{
            backgroundColor: "#2E2C39",
            padding: 10,
            marginStart: 10,
            width: 120,
            marginVertical: 15,
            borderRadius: 6,
            borderWidth:1,
            borderColor:'#F1BFC0'
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
            START
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
