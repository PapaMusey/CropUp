import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function FarmListScreen() {
  return (
    <View>
      <View>
        <Text>FarmList</Text>
      </View>
      <View>
        <Text>Create New Farm</Text>
      </View>
      <View>
        <Text>Create farm and fill in required details</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Add Farm</Text>
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
