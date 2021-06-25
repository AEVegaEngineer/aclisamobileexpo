import React, { useState, useRef } from "react";
import {StackEmpleado,StackSocio,SinLogin} from "./src/Stacks/Stacks";
import { DrawcontentEmpleado } from "./src/Screen/Empleado/DrowerContentEmpleado/Drower";
import { DrawcontentSocio } from "./src/Screen/Socio/DrowerContentSocio/Drower";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Alert,
  AsyncStorage,
  ActivityIndicator,
  View,
  Platform
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "./Component/context";
import { useStateIfMounted } from "use-state-if-mounted";
import { stylesGral } from "./Asset/estilos/stylesGral";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import * as SecureStore from "expo-secure-store";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { ImageOverlay } from "./src/Screen/Global/extra/image-overlay.component";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Drawer = createDrawerNavigator();

function LoginAlert(msg) {
  Alert.alert(
    "Ha ocurrido un error!",
    msg,
    [{ text: "Cerrar", onPress: () => console.log("Alerta cerrada") }],
    { cancelable: true }
  );
}

function LoginInfo(title, msg) {
  Alert.alert(
    title,
    msg,
    [{ text: "Cerrar", onPress: () => console.log("LoginInfo cerrado") }],
    { cancelable: true }
  );
}

export default function App({ navigation }) {
  //setters y getters para notificaciones
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [show, setshow] = useStateIfMounted(false);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            UserRoles: action.Roles,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.Roles,
            UserRoles: action.Roles,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            UserRoles: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      UserRoles: null,
    }
  );

  React.useEffect(() => {
    // setshow(true);
    AutologinByToken();
    // notificaciones
    registerForPushNotificationsAsync().then((token) =>
      {
        setExpoPushToken(token);
        //LoginInfo('token:',token)
        const expoT = (token == '' || typeof token === 'undefined' || token === null) ? "simulador" : token;
        SecureStore.setItemAsync("ExpoToken", expoT);
        console.log("el token es: " + expoT);
      }
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        //console.log("Notificación recibida");
        //console.log(response);
      }
    );
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };

    
  }, []);
  
  
  const AutologinByToken = async() => {
    //console.log("ejecutando autologinbytoken")
    const tokenAlmacenado = await SecureStore.getItemAsync("token");
    if (tokenAlmacenado != null) {
      dispatch({
        type: "SIGN_IN",
        token: tokenAlmacenado,
        Roles: "SOCIO",
      });      
    }    
  } 
  const authDevice = async( tipo, token ) => { 
    
    const expoToken = await SecureStore.getItemAsync("ExpoToken"); //(!t === undefined && t != "") ? t : "simulador";
    if(expoToken != "simulador") {

      const endpoint = (tipo == "insert") ? "insert/mine" : "delete/my";
      const authDeviceURL = "http://66.97.39.24:8044/mensajes/device/"+endpoint;
      const deviceOS = (Platform.OS === "android") ? "android" : "iOS";
      const Datos = { "deviceId" : expoToken };
      if(tipo == "insert")
        Datos["deviceName"] = deviceOS;
      const metodo = (tipo == "insert") ? "POST" : "DELETE";
      //console.log(authDeviceURL);
      //console.log("Authorization: "+token);      
      //console.log({'deviceOS':deviceOS});
      console.log(Datos);
      await fetch(authDeviceURL, {
        method: metodo,
        headers: {
          "Authorization": token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Datos),
        
      }).then(async(response) => {
        const result = await response.json();
        console.log(result);
        //LoginInfo('Llamada de registro de device: ','Data: '+JSON.stringify(Datos)+'\n'+JSON.stringify(result)+'\nexpoToken: '+expoToken);
        
        if(!await response.ok) {      
          const errMsg = (tipo == "insert") 
            ? "No se ha podido registrar el dispositivo, no se recibirán notificaciones. Debe volver a iniciar sesión." 
            : "No se ha podido desvincular el dispositivo, seguirá recibiendo notificaciones.";
          throw errMsg;
        } /*else {
          const successMsg = (tipo == "insert") ? "Se registró el dispositivo correctamente" : "Se eliminó el dispositivo correctamente";
          console.log(successMsg);
        } */
      }).catch((error) => {
        console.log(error)
        LoginAlert(error);
      })
    }   
  }

  const authContext = React.useMemo(
    () => ({
      
      signIn: async (data) => {
        setshow(true);
        const Datos = {
          username: data.email.toLowerCase(),
          password: data.password.toLowerCase(),
        };
        // props.navigation && props.navigation.goBack();
        await fetch("http://66.97.39.24:8044/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Datos),
        }).then(function(response) {
          //console.log("retorna del login");
          if(response.ok) {      
            //console.log("login OK");
            var token = response.headers.map.authorization;            
            response.json().then((responseData) => {
              //console.log(token);
              //console.log(responseData);
              AsyncStorage.setItem("UserName", responseData.nombreUsuario);
              var rol = "";
              if(responseData.permisos[1] =="ROLE_ADMIN") {
                rol = "ADMIN";
                dispatch({
                  type: "SIGN_IN",
                  token: token,
                  Roles: rol,
                });                
              } else {
                rol = "SOCIO";
                dispatch({
                  type: "SIGN_IN",
                  token: token,
                  Roles: rol,
                });                
              }  
              SecureStore.setItemAsync("token", token);             
              
              var loginData = {
                "mensaje":"Autenticado correctamente",
                /*"token":token,*/
                /*Token no se debe guardar en asyncstorage sino en secure storage*/
                "rol":rol
              };
              AsyncStorage.setItem("authData",JSON.stringify(loginData));
              authDevice("insert",token);
              setshow(false);   
            });
          } else {
            setshow(false);
            LoginAlert("Usuario o contraseña incorrectos");
          }
        }).catch((error) => {
          console.log(error)
          setshow(false)
          LoginAlert("Tenemos problemas al comunicarnos con ACLISA")
        })
        /*
        .then((responseData) => {
          console.log(responseData);
          console.log(response.headers);
          AsyncStorage.setItem("UserName", responseData.nombreUsuario);
          if (responseData.token) {
            if(responseData.permisos[1] =="ROLE_ADMIN") {
              dispatch({
                type: "SIGN_IN",
                token: responseData.token,
                Roles: "ADMIN",
              })
            } else {
              dispatch({
                type: "SIGN_IN",
                token: responseData.token,
                Roles: "SOCIO",
              });
            }         
            SecureStore.setItemAsync("token", responseData.token)
            AsyncStorage.setItem("authData",JSON.stringify(responseData))
            setshow(false);
          }           
        })
        
        */
      },      
      signOut: async() =>
        {
          const token = await SecureStore.getItemAsync("token");
          dispatch(
            { type: "SIGN_OUT" },
            authDevice("delete",token),
            SecureStore.deleteItemAsync("token"),          
          )
        }
    }),[]
  );

  return show ? (
    <ImageOverlay
        style={{flex:1}}
        source={require("./assets/background.jpg")}
      >
    <View style={[stylesGral.containerLoading, stylesGral.horizontalLoading]}>
      <ActivityIndicator size="large" color="white" />
      </View>
      </ImageOverlay>
  ) : (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
          <NavigationContainer>
            {state.userToken == null ? (
              <SinLogin />
            ) : state.UserRoles == "SOCIO" ? (
              <Drawer.Navigator
                initialRouteName="Medico"
                drawerContent={(props) => <DrawcontentSocio {...props} />}
              >
                <Drawer.Screen name="Medico" component={StackSocio} />
              </Drawer.Navigator>
            ) : state.UserRoles == "ADMIN" ? (
              <Drawer.Navigator
                initialRouteName="Empleado"
                drawerContent={(props) => <DrawcontentEmpleado {...props} />}
              >
                <Drawer.Screen
                  name="Empleado"
                  component={StackEmpleado}
                />
              </Drawer.Navigator>
            )  : null}
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </ApplicationProvider>
  );

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Original Title",
      body: "And here is the body!",
      data: { data: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        LoginAlert(
          "Ha ocurrido un error obteniendo el token push para las notificaciones!"
        );
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //console.log("el token es: " + token);
    } else {
      LoginAlert(
        "Se debe usar un dispositivo físico para recibir Notificaciones Push"
      );
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }
}
