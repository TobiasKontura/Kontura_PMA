import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Item from "./src/components/Item";

export default function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddItem() {
    console.log("Item: ", item);
    setTasks([...tasks, item, done]);
    console.log("Tasks: ", tasks);
  }

  function handleInputText(text) {
    setItem(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          style={styles.input}
          placeholder="Enter text here..."
        />
        <Button onPress={handleAddItem} title="ADD" />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#afbb99",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },

  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#1fecff",
  },
});
