import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import WorkoutScreen from './Screens/WorkoutScreen';
import FitScreen from './Screens/FitScreen';
import RestScreen from './Screens/RestScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}} />
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}} />
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})