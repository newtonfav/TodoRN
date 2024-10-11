import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((courseGoal) => courseGoal.id !== id)
    );
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
          setCourseGoals={setCourseGoals}
        />
        <View style={styles.goalsContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginVertical: 10,
              color: "white",
            }}
          >
            List of Goals
          </Text>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 80,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
