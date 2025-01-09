import { Text, View, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sign Up</Text>
      <Text>Sign Up</Text>
      <Link href="/SignIn/index">
        <Button title="Sign In" />
      </Link>
      <Link href="/SignUp/index">
        <Button title="Sign Up" />
      </Link>
    </View>
  );
}
