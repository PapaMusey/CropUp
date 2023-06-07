import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Settings() {
  return (
    <View>
      <View>
        <Text>Settings</Text>
      </View>
      {/* Image*/}
      {/* Name*/}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Edit profile information</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Theme</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
