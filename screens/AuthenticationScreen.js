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
        <Text style={styles.titlep}>AuthenticationScreen</Text>
      </View>
      <View>
        <Text>Enter the code sent to 'Number'</Text>
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
      <View style={styles.flexrow}>
        <View>
          <TouchableOpacity onPress={() => console.log("texts")}>
            <Text style={styles.bText}>Resend</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>code if you haven’t received one</Text>
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
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
});
