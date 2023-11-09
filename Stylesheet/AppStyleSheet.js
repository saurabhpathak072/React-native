import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
   
  },
  textBox: {
    borderWidth: 2,
    borderColor: "red",
  },
  inputContainer: {
    flex: 1,
  padding: 16,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color:"#120438",
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  presseditem: {
    opacity: 0.5,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop: 16
  },
  button:{
    width: 100,
    marginHorizontal: 8
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  }
});

export default styles;
