import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Image} from 'react-native'
import ForgotPassword from "../Screen/SinLog/ForgotPassword/index";
import Land from "../Screen/SinLog/Landing/Landing";
import ListaNotificaciones2 from "../Screen/notificaciones/ListaNotificaciones2";
import DetalleNotificacion from "../Screen/notificaciones/DetalleNotificacion";
import Login from "../Screen/SinLog/Login/Login";
import SplashInicio from "../Screen/Global/Splash";
import { TouchableOpacity } from "react-native-gesture-handler";

// const SocioStack = createStackNavigator();
const Stack = createStackNavigator();


function LogoTitle( {navigation} ) {
  return (
    <TouchableOpacity style={{backgroundColor:'transparent', padding:0}} onPress={()=>navigation.openDrawer()}>
    <Image
      style={{padding:0, width: 40, height: 60, flex:0 }}
      source={require("../../assets/icon_menu.png")}
      />
    </TouchableOpacity>      
  );
}


export const SinLogin = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Land} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPass" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export const StackEmpleado = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="ListaNotificaciones2"
    screenOptions={{ headerShown: true }}
  >
     <Stack.Screen
        name="SplashInicio"
      component={SplashInicio}      
       options={{
        headerTitle:"",
         headerTransparent: true,
         animationEnabled: false,
      }}     
      />
      <Stack.Screen
      name="ListaNotificaciones2"
      component={ListaNotificaciones2}
      options={{
        headerLeft: () => (
          <LogoTitle navigation={navigation}/>
        ),
        headerTitle:"Notificaciones"
      }}
    />
      <Stack.Screen
        name="DetalleNotificacion"
      component={DetalleNotificacion}
      screenOptions={{ headerShown: false }}
      options={{
          headerTitle:"Detalle de la asd",
          headerBackTitle:"Atrás",
          headerBackTitleVisible: false
        }}
      />
    
  </Stack.Navigator>
);

export const StackSocio = ({ navigation }) => (
 <Stack.Navigator
    initialRouteName="ListaNotificaciones2"
    // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="SplashInicio"
      component={SplashInicio}
      options={{
        headerTitle:"",
        headerTransparent: true,
        animationEnabled: false,
      }}    
    />    
    <Stack.Screen
      name="ListaNotificaciones2"
      component={ListaNotificaciones2}
      options={{
        headerLeft: () => (
          <LogoTitle navigation={navigation}/>
        ),
        headerTitle:"Notificaciones"
      }}
    />

    <Stack.Screen
      name="DetalleNotificacion"
      component={DetalleNotificacion}
      screenOptions={{ headerShown: true }}
      options={{
        headerTitle:"Detalle de la Notificación",
        headerBackTitle:"Atrás"
      }}
    />    
  </Stack.Navigator>
);
// esto sirve para poder ocultar la barra se manda cual era la que se oculta
// function getTabBarVisible(route) {
//   const routeName = route.state
//     ?  route.state.routes[route.state.index].name
//     : route.params?.screen || 'Home';

//   if (routeName === 'Details') {
//     return false;
//   }
//   return true;
// }
