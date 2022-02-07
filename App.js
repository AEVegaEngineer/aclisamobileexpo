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

import * as Notifications from "expo-notifications";
import * as SecureStore from "expo-secure-store";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { ImageOverlay } from "./src/Screen/Global/extra/image-overlay.component";
import { NotificationSetUp, registerForPushNotificationsAsync } from "./src/notifications/PushNotifications"
import { authDevice } from "./src/auth/authDevice";
import { autologinByToken } from "./src/auth/autologinByToken";
import { authReducer } from "./src/reducers/authReducer";

NotificationSetUp();

const Drawer = createDrawerNavigator();

function LoginAlert(msg) {
  Alert.alert(
    "Ha ocurrido un error!",
    msg,
    [{ text: "Cerrar", onPress: () => console.log("Alerta cerrada") }],
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
  const initAuthState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    UserRoles: null,
  }
  const [state, dispatch] = React.useReducer(
    authReducer,
    initAuthState
  );

  React.useEffect(() => {
    // setshow(true);
    autologinByToken(dispatch);
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

  const authContext = React.useMemo(
    () => ({
      
      signIn: async (data) => {
        setshow(true);
        const Datos = {
          username: data.email.toLowerCase(),
          password: data.password.toLowerCase(),
        };
        // props.navigation && props.navigation.goBack();
        await fetch("http://aclisasj.com.ar:8044/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mobile"
          },
          body: JSON.stringify(Datos),
        }).then(function(response) {
          //console.log("retorna del login");
          if(response.ok) {      
            console.log("login OK");
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
}
