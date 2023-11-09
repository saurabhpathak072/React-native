import { StatusBar } from "expo-status-bar";
import { lazy, Suspense, useState } from "react";
import { Button, Text, TextInput, View, FlatList } from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";
import styles from "./Stylesheet/AppStyleSheet";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddGoal = (goalInput) => {
    setGoalList((goalListstate) => [
      ...goalListstate,
      {
        text: goalInput,
        id: Math.random().toString(),
      },
    ]);
    handleGoalInputModal();
  };

  const deleteCourseHandler=(id)=>{
  
    setGoalList((goalListState=>{
      return goalListState.filter(goal=>goal.id !== id)
    }));
  }

  const handleGoalInputModal=()=>{
    setIsModalVisible((isVisible)=>!isVisible)
  }

  return (
    <>
   <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add Goals" color={'#5e0acc'} onPress={handleGoalInputModal}/>
      <GoalInput isVisible={isModalVisible} handleModalVisibility={handleGoalInputModal} handleAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return <GoalItem item={itemData.item} onDeleteItem={deleteCourseHandler}/>;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
    </>
  );
}
