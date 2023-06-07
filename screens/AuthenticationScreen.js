import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function AuthenticationScreen() {
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);

  const handleChangeText = (text, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);
  };

  return (
    <View>
      <View>
        <Text style={styles.titlep}>Account Authentication</Text>
      </View>
      <View>
        <Text style={styles.belowAuthentext}>
          Enter the code sent to 'Number'
        </Text>
      </View>

      <View style={styles.inputContainer}>
        {inputValues.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={value}
            onChangeText={(text) => handleChangeText(text, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>

      <TextInput />
      <View style={styles.inputContainer}>
        <View>
          <TouchableOpacity onPress={() => console.log("texts")}>
            <Text style={styles.bText}>Resend </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.bottomtext}>
            code if you haven’t received one
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    borderColor: "#777777",
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
    paddingRight: 0,
  },
  bText: {
    color: "#007E23",
    fontWeight: "500",
    paddingLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 0,
    alignItems: "center",
  },
  bottomtext: {
    color: "#777777",
    paddingLeft: 0,
  },
  belowAuthentext: {
    paddingBottom: 30,
    paddingTop: 50,
    color: "#777777",
    textAlign: "center",
  },
});
