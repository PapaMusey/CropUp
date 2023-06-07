import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function FarmListScreen() {
  return (
    <View>
      <View>
        <Text>FarmList</Text>
      </View>
      <View style={styles.containerwraper}>
        <View>
          <Text style={styles.title}>Create New Farm</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            Create farm and fill in required details
          </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    fontWeight: "500",
    padding: 5,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#898989",
    borderRadius: 0,
    padding: 10,
    marginTop: 20,
  },
  subtitle: {
    color: "#666666",
  },
  title: {
    fontWeight: "700",
    paddingBottom: 20,
  },
  containerwraper: {
    backgroundColor: "F1F1F1",
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderColor: "#666666",
  },
});
