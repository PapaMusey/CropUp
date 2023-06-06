import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function CreateAccountScreen() {
  const [isSelected, setSelection] = useState(true);

  const handleCheckboxChange = () => {
    setSelection(!isSelected);
  };

  return (
    <View
      style={[{ flex: 1, paddingVertical: 100, justifyContent: "flex-start" }]}
    >
      <View>
        <Text style={styles.titlep}>Create Account</Text>
      </View>
      <View>
        <Text style={styles.subtitle}> Enter your details to sign up</Text>
      </View>
      <View>
        <Text>Email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your email"
        />
      </View>
      <View>
        <Text>Phone Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Phone Number"
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Password"
        />
      </View>
      <View>
        <Text>Forgot Password</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("navigation")}
      >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <View>
        <Text>Already have an account ?</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log("texts")}>
          <Text style={styles.bText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
  },
  subtitle: {
    margin: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    backgroundColor: "#007E23",
    borderRadius: 18,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 14,
  },
});
