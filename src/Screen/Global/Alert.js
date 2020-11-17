import { View, StyleSheet, Button, Alert } from "react-native";


export const CreateAlert = (title, msg) =>
  Alert.alert(
    title,
    msg,
    [
      //{ text: "Aceptar", onPress: () => console.log("OK presionado") }
    ],
    { cancelable: true }
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
export const CreateAlertDoc = (title, msg) =>
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Volver",
        //onPress: () => console.log("Volver pressed"),
        style: "cancel"
      },
      {
        text: "Atender",
        //onPress: () => console.log("Atender pressed")
      }
    ],
    { cancelable: false }
  );


