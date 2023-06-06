import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function EditProfile() {
  return (
    <View>
      <View>
        <Text>EditProfile</Text>
      </View>

      <View>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter Full Name"
        />
      </View>
      <View>
        <Text>Email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter Email address"
        />
      </View>
      <View>
        <Text>Phone number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter phone number"
        />
      </View>
      <View>
        <Text>Gender</Text>
        {/* Drop down */}
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

const styles = StyleSheet.create({});
