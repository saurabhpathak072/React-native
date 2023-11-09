import React from "react";
import PropTypes from "prop-types";
import { View, Text, Pressable } from "react-native";
import styles from "../Stylesheet/AppStyleSheet";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, item.id)}
        style={({ pressed }) => {
          return pressed && styles.presseditem;
        }}
      >
        <Text style={styles.goalText}> {item.text}</Text>
      </Pressable>
    </View>
  );
};

GoalItem.prototype = {
  item: PropTypes.object,
  onDeleteItem: PropTypes.object,
};

export default GoalItem;
