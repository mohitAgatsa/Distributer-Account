import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Account from "./Account";
import Checkbox from "expo-checkbox";
import axios from "axios";

// import { response } from "express";

const Contact = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [items, setItems] = useState([]);
  const [agree, setAgree] = useState(false);

  const postData = () => {
    const user = {
      email: `${userEmail}`,
      userType: `${userType}`,
      deviceId: [`${items}`],
    };
    const url = "http://43.204.145.198:1401/api/v1/devicemap";
    axios
      .post(url, user)
      .then((res) => {
        console.log("response", res);
        console.log(res.request.status);
        if (res.request.status === 201) {
          navigation.navigate("Details");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleaddclick = () => {
    console.log(deviceId);
    // setItems([...items, deviceId]);
    if (!deviceId) {
    } else {
      items.push(deviceId);
      console.log(items);
      setDeviceId("");
    }
  };

  //   if (password === "mehra") {
  //     console.log(`${userName}`);
  //     alert(`Thank You  ${userName}`);
  //     navigation.navigate("home", { myName: `${userName}` });
  //   } else {
  //     alert("Username and Password is not correct");
  //   }
  // };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.mainHeader}> Distributer Account </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Email </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userEmail}
          onChangeText={(actualData) => setUserEmail(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Usertype </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          // autoCorrect={false}
          value={userType}
          onChangeText={(actualData) => setUserType(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Device Id</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          //   secureTextEntry={true}
          value={deviceId}
          onChangeText={(actualData) => setDeviceId(actualData)}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "red" }]}
        onPress={handleaddclick}
      >
        <Text style={styles.buttonText}> Add More </Text>
      </TouchableOpacity>
      {/* checkbox  */}
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>
      {/* submit button  */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        // onPress={() => navigation.navigate("Details")}
        onPress={postData}
      >
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    FontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
  },
});
export default Contact;
