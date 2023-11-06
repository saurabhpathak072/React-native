import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Your Course goal!' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text style={styles.textBox}> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textBox: {
   
    borderWidth: 2,
    borderColor: "red",
  
  },
});
