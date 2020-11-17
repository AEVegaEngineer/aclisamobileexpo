import { StyleSheet, View, AsyncStorage } from 'react-native'
import React, { Component, useState, useEffect, useRef } from 'react';
import { ImageOverlay } from "./extra/image-overlay.component";
import { Button, Input, Text } from "@ui-kitten/components";

const Splash = ({ navigation }) => {
  const [Nombre, setNombre] = useState("");
  obtenerNombre = async () => {
    setNombre(await AsyncStorage.getItem("UserName"))
  }
  React.useEffect(() => {
    
    obtenerNombre();
    setTimeout(() => {

      navigation.replace("ListaNotificaciones")
    }, 3000);
  }, [])

return (
 <ImageOverlay
        style={styles.container}
        source={require("../../../assets/background.jpg")}
      >
        <View style={styles.headerContainer}>
          <Text category="h1" status="control">
            Bienvenido {Nombre}
          </Text>
          <Text category="h1" style={styles.signInLabel} category="s1" status="control">
            Nos alegra verte de nuevo por aquí
          </Text>
        </View>
  </ImageOverlay>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 220,
   
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
    marginBottom:30,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },

  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

});

export default Splash