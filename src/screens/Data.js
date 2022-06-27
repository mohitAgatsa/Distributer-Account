import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Data = ({ route }) => {
  const { data } = route.params;
  return (
    <View>
      <Text>Data:{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Data;
