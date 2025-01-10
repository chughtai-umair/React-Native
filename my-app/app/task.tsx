import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
} from "react-native";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Tasks() {
  const data = useQuery(api.task.getTasks);
  const createTask = useMutation(api.task.createTask);
  const [form, setForm] = useState({
    title: "",
    description: "",
    completed: false,
  });
  return (
    <View>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Title"
          value={form.title}
          onChangeText={(e) => setForm((prev) => ({ ...prev, title: e }))}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Description"
          value={form.description}
          onChangeText={(e) => setForm((prev) => ({ ...prev, description: e }))}
        />
      </View>
      <Button
        title="Add Task"
        onPress={() =>
          createTask({
            title: form.title,
            description: form.description,
            completed: form.completed,
          })
        }
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            description={item.description}
            completed={item.completed}
          />
        )}
      />
    </View>
  );
}

function Task({
  title,
  description,
  completed,
}: {
  title: string;
  description: string;
  completed: boolean;
}) {
  return (
    <View>
      <Text>Title : {title}</Text>
      <Text>description: {description}</Text>
      <Text>Completed: {JSON.stringify(completed)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
  },
});
