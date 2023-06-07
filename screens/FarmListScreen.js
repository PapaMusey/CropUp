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
    fontSize: 15,
  },
  title: {
    fontWeight: "500",
    paddingBottom: 15,
    fontSize: 18,
  },
  containerwraper: {
    borderWidth: 1,
    borderColor: "#F1F1F1",
    backgrounColor: "#FBFBFB",
    paddingHorizontal: 45,
    paddingVertical: 15,
  },
});
