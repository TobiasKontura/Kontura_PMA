import { Text, StyleSheet, Pressable } from "react-native";

export default function Item({ title }) {
  return (
    <Pressable>
      <Text style={styles.taskItem}>
        {title} {title.done}
      </Text>
    </Pressable>
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
});
