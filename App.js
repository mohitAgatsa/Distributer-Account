import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "./src/screens/Contact";
import Account from "./src/screens/Account";
import Data from "./src/screens/Data";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DestributerAccount">
        <Stack.Screen name="DestributerAccount" component={Contact} />
        <Stack.Screen name="Details" component={Account} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
