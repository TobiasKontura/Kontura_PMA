import { Text, StyleSheet, Pressable, View } from "react-native";

export default function Item({ item, onDone, onDelete }) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text
          onPress={() => onDone(item.id)}
          onLongPress={() => onDelete(item.id)}
          style={item.done ? styles.taskItemDone : styles.taskItem}
        >
          {item.title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "#ee401d",
    margin: 8,
    borderRadius: 8,
    padding: 5,
    fontSize: 35,
  },
  taskItemDone: {
    backgroundColor: "#6aff07",
    margin: 8,
    borderRadius: 8,
    padding: 5,
    fontSize: 35,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
