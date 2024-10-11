import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ itemData, onDeleteGoal, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    color: "white",
  },
  pressItem: {
    opacity: 0.5,
  },
});
