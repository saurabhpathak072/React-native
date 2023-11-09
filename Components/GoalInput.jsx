import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, TextInput, View, Image } from "react-native";
import styles from "../Stylesheet/AppStyleSheet";

const GoalInput = ({ handleAddGoal, handleModalVisibility, isVisible }) => {
  const [goalInput, setGoalInput] = useState("");

  function handleInputGoalChange(text) {
    setGoalInput(text);
  }

  const addGoalHandler = () => {
    handleAddGoal(goalInput);
    setGoalInput(null);
  };

  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={handleInputGoalChange}
          value={goalInput}
          placeholder='Your Course goal!'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add Goal'
              color={"#5e0acc"}
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              color={"#f31282"}
              onPress={handleModalVisibility}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

GoalInput.propTypes = {
  handleAddGoal: PropTypes.func,
  isVisible: PropTypes.bool,
  handleModalVisibility: PropTypes.func,
};

export default GoalInput;
