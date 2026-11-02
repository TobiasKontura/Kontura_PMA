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
    const id = "id" + Math.random().toString(16).slice(2);
    console.log(id);
    console.log("Item: ", item);
    setTasks((prevTasks) => [
      ...prevTasks,
      { done: false, id: id, title: item },
    ]);
    setItem("");
    console.log("Tasks: ", tasks);
  }

  function handleDeleteItem(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  function handleClearTasks() {
    setTasks([]);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nazov}>Počitadlo objednavok</Text>
        <Text style={styles.pocet}>{tasks.length}</Text>
        <Button style={styles.plus} onPress={handleAddItem} title="+" />
        <Button style={styles.minus} onPress={handleDeleteItem} title="-" />
        <Button
          style={styles.clear}
          onPress={handleClearTasks}
          title="Vynulovať"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  nazov: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  pocet: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  plus: {
    textAlign: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  minus: {
    backgroundColor: "#f44336",
    marginBottom: 20,
  },
  clear: {
    backgroundColor: "#ff9800",
    marginBottom: 20,
  },
});
