import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

export default function AddFarm() {
  return (
    <View>
      <View>
        <Text>AddFarm</Text>
      </View>

      <View>
        <Text>Farm Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter name of farm"
        />
      </View>
      <View>
        <Text>Location</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter location of farm"
        />
      </View>
      <View>
        <Text>Size of Land</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter Size/Area of Land"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 18,
  },
});
