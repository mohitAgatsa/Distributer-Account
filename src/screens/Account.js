import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Account = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [idData, setIdData] = useState([]);

  const getData = () => {
    const user = {
      email: `${userEmail}`,
      // userType: `${userType}`,
      // deviceId: [`${items}`],
    };
    const url = "http://43.204.145.198:1401/api/v1/soldDevices";
    axios
      .post(url, user)
      .then((res) => {
        console.log("response", res);
        console.log(res.request.status);
        console.log(res.data.data);
        if (res.request.status === 201) {
          navigation.navigate("Data", {
            data: res.data.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <View style={styles.mainMenu}>
        <Text style={styles.wrapperText}>Thank You !</Text>
        <Text style={styles.wrapperText}>Your Account has been Created</Text>
      </View>
      <View style={styles.mainContainer}>
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
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: "red" }]}
          onPress={getData}
        >
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
      </View>
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
export default Account;
