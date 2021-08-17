import { ImageSourcePropType } from 'react-native';
import React from "react";
import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  AsyncStorage
} from "react-native";

export const DataNotificaciones = () => {

  const [FullNotifs, SetFullNotifs] = React.useState([]);
  const [Notifs, SetNotifs] = React.useState([]);
  const [TipoNotificacion, SetTipoNotificacion] = React.useState("no leidas");
  const [AuthMensaje, SetAuthMensaje] = React.useState("");
  const [AuthToken, SetAuthToken] = React.useState("");
  const [AuthRol, SetAuthRol] = React.useState("");
  // constructor(readonly title: string,
  //             readonly duration: number,
  //             readonly level: TrainingLevel,
  //             readonly image: ImageSourcePropType) {
  // }
   React.useEffect(() => {
    setAuthData();
    // getNotificaciones();
    //console.log(AuthData)
  }, []);
  React.useEffect(() => {
    console.log(AuthMensaje)
  }, [AuthMensaje]);


    const SetNotificaciones = async (fullnotifs) => {
      await AsyncStorage.setItem('Notificaciones', JSON.stringify(fullnotifs))
      console.log("SetNotificaciones -> fullnotifs", fullnotifs)
  }
   async function getNotificaciones(AuthObject) {
    
    var getNotificacionesEndpoint =
      "http://serviciosweb.colegiomedico.org.ar:3000/getNotificaciones";
    await fetch(getNotificacionesEndpoint, {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + AuthObject.token,
        "Content-Type": "application/json",
        "User-Agent": "Mobile"
      }),
    })
    .then((response) => {
      return response.ok
        ? response.json()
        : Promise.reject("Error en la conexión");
    })
      .then((data) => {
      console.log(data)
      console.log("llenada SetFullNotifs y SetNotificaciones")
      // enviarNotifAsync(data)  
      SetFullNotifs(data)
      SetNotificaciones(data)
    })
    .catch((error) => console.log(error));
  }
  const setAuthData = async() => {
    const a = await AsyncStorage.getItem('authData');   
    console.log(a)
    var authDataObject = JSON.parse(a); 
    // SetAuthMensaje(authDataObject.mensaje);
    // SetAuthToken(authDataObject.token);
    // SetAuthRol(authDataObject.rol);    
    getNotificaciones(authDataObject)
  }

 
  
}