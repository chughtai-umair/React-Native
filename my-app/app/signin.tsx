import { Text, View, TextInput, StyleSheet } from "react-native";
export default function SignIn() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sign in</Text>

      <View style={styles.input}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="username" />
      </View>

      <View style={styles.input}>
        <TextInput placeholder="Password" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "80%",
    marginHorizontal: 60,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 10,
  },
});
