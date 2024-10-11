import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <View style={styles.goalsContainer}>
        <Text style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>
          List of Goals
        </Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
