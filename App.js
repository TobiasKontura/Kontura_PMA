import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddItem() {
    console.log("Item: ", item);
    setTasks([...tasks, item]);
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
      <View style={styles.udalosti}>
        {tasks.map((i) => {
          <Text>{i}</Text>;
        })}
      </View>
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
  udalosti: {
    flex: 5,
    backgroundColor: "#e59833",
  },
});
