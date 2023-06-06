import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

export default function LogIn() {
  return (
    <View
      style={[{ flex: 1, paddingVertical: 100, justifyContent: "flex-start" }]}
    >
      <View>
        <Text style={styles.titlep}>Hi, Welcome Back! 👋</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Fill in your details to login</Text>
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
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.fText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Don't have an account ?</Text>
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
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
});
