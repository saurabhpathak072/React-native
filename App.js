import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course goal!' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  textBox: {
    borderWidth: 2,
    borderColor: "red",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight:8,
    padding: 8
  }
});
