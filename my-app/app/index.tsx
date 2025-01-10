import { Text, View, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sign in</Text>
      <Text>Sign Up</Text>
      <Button title="Sign In" onPress={() => router.navigate("/signin")} />
      <Button title="Sign Up" onPress={() => router.navigate("/signup")} />
      <Button title="Tasks" onPress={() => router.navigate("/task")} />
    </View>
  );
}
