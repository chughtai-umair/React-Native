import React from "react";
import { View, Text } from "react-native";

const SignIn = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Sign In</Text>
    </View>
  );
};

export default SignIn;
