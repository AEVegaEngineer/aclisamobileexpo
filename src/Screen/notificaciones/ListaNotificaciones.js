import React from "react";
import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import {
  Card,
  Button,
  Text,
} from "@ui-kitten/components";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import * as SecureStore from "expo-secure-store";
import { TouchableOpacity } from "react-native-gesture-handler";

function testJSON(text) { 
  if (typeof text !== "string") { 
      return false; 
  } 
  try { 
      JSON.parse(text); 
      return true; 
  } catch (error) { 
      return false; 
  } 
}

const ListaNotificaciones = ({ navigation }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{backgroundColor:'transparent', padding:0}} onPress={() => getNotificaciones()}>
          <Image
          style={{padding:0, width: 40, height: 40, flex:0 }}
          source={require("../../assets/images/sync-flat.png")}
          />          
        </TouchableOpacity>
        // <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);


  const [FullNotifs, SetFullNotifs] = React.useState([]);
  const [Notifs, SetNotifs] = React.useState([]);
  const [TipoNotificacion, SetTipoNotificacion] = React.useState("no leidas");
  const [AuthMensaje, SetAuthMensaje] = React.useState("");
  const [AuthToken, SetAuthToken] = React.useState("");
  const [AuthRol, SetAuthRol] = React.useState("");
  
  const SetNotificaciones = async (fullnotifs) => {
    //await AsyncStorage.setItem('Notificaciones',JSON.stringify(fullnotifs))
  }

  const mostrarDetalle = async (idcuerpo) => {
    var notifSeleccionada = {}
    Notifs.forEach(notificacion => {
      if(notificacion.id == idcuerpo)
        notifSeleccionada = notificacion      
    });
    console.log(notifSeleccionada)
    await AsyncStorage.setItem('NotifSeleccionada',JSON.stringify(notifSeleccionada))

    //navigation.navigate("DetalleNotificacion")


    
    //var arr = await AsyncStorage.getItem('Notificaciones')
    /*
    var arr = Notifs;
    
    */
  }

  // const CardMenuSuperior = () => (
  //   <View
  //     style={{
  //       flexDirection: "row",
  //       marginBottom: 25,
  //       borderRadius: 20,
  //       marginHorizontal: 25,
  //     }}
  //   >
      
  //     <TouchableHighlight
  //       style={{
  //         width: "40%",
  //       }}
  //       onPress={() => {
  //         SetTipoNotificacion("no leidas");
  //         //console.log(FullNotifs[0]);
  //         //SetNotifs(FullNotifs[0]);
  //         SetNotifs(FullNotifs);
  //       }}
  //     >
  //       <View
  //         style={{
  //           backgroundColor: "#28a745",
  //           paddingVertical: 15,
  //         }}
  //       >
  //         <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
  //           No Leídas
  //         </Text>
  //       </View>
  //     </TouchableHighlight>
  //     <TouchableHighlight
  //       style={{
  //         width: "40%",
  //       }}
  //       onPress={() => {
  //         SetTipoNotificacion("leidas");
  //         //console.log(FullNotifs[1]);
  //         SetNotifs(FullNotifs[1]);
  //       }}
  //     >
  //       <View
  //         style={{
  //           backgroundColor: "#17a2b8",
  //           paddingVertical: 15,
  //         }}
  //       >
  //         <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
  //           Leídas
  //         </Text>
  //       </View>
  //     </TouchableHighlight>
  //     <TouchableHighlight
  //       style={{
  //         width: "20%",
  //         textAlign: 'center'
  //       }}
  //       onPress={() => {
  //         console.log("Sincronizadas notificaciones")
  //         getNotificaciones().then(()=>{SetNotifs(FullNotifs)});
  //       }}
  //     >
  //       <View
  //         style={{
  //           backgroundColor: "#007bff",
  //           paddingVertical: 15,
  //           justiftyContent:"center", 
  //           alignItems:"center",
  //         }}
  //       >          
  //         <FontAwesomeIcon icon={ faSync } style={{color:'white'}} size={34} />
  //       </View>
  //     </TouchableHighlight>
  //   </View>
  // );

  const getNotificaciones = () => {
    //console.log(AuthToken);
    /*var AuthToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMTMxLCJjaGVjayI6dHJ1ZSwiaWF0IjoxNjAxMzAwNjQ4fQ.ZHnOrn2qV-5pY7c-NpuhoMWILL2LDI90vGiq_jmWmrs";*/
    var getNotificacionesEndpoint = "http://66.97.39.24:8044/mensajes/msjCuerpo/getAllByUserDestino";
    console.log("getNotificaciones")
    fetch(getNotificacionesEndpoint, {
      method: "GET",
      headers: {
        "Authorization": AuthToken
      }
    })
    .then((response) => 
      {
        //return (testJSON(response.text())) ? response.json() : {}
        return response.json()
      })
    .then((responseData) => { // responseData = undefined  
      console.log("imprimiendo responseData");
      console.log(responseData);
     })
    .catch(function(err) {
        console.log(err);
    })
    /*
    const data = await response.json();
    console.log(data);
    */

    /*
    let notificaciones = fetch(getNotificacionesEndpoint, {
      method: "GET",
      headers: new Headers({
        "Authorization": AuthToken
      })
    })
    .then(async (response) => await response.json())
    .then(response => {

        console.log(response)

    });
    */
    /*
    .then(async(response) => {
      console.log("retorna del getNotificaciones");
      let respuesta = await response;
      if(respuesta.ok) {      
        console.log("getNotificaciones OK");
        
        respuesta.json().then((data) => {
          console.log(data);
        });
      } else {
        console.log("Usuario o contraseña incorrectos");
      }
    }).catch((error) => {
      console.log(error);
      console.log("Tenemos problemas al comunicarnos con ACLISA");
    })
    */

    /*
    let json;
    try {
      let response = await fetch(getNotificacionesEndpoint, {
        method: "GET",
        headers: new Headers({
          "Authorization": AuthToken
        }),
      });
      json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    */
    
    
    
    
    /*
    await fetch(getNotificacionesEndpoint, {
      method: "GET",
      headers: new Headers({
        "Authorization": AuthToken
      }),
    })
    .then(async (response) => {
      console.log("entra en response");      
      return await response.ok
        ? await response.json()
        : Promise.reject("Error en la conexión, vuelva a intentarlo más tarde.");      
    })
    .then((datos) => {
      console.log("llenada SetFullNotifs y SetNotificaciones");
      var notifs = datos.Respuesta.data.msjCuerpos;
      SetNotifs(notifs);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
    */
  }

  async function setAuthData(){
    var a = await AsyncStorage.getItem('authData');  
    var b = await SecureStore.getItemAsync("token");
    var authDataObject = JSON.parse(a); 
    SetAuthMensaje(authDataObject.mensaje);
    SetAuthToken(b);
    SetAuthRol(authDataObject.rol);    
  }
/*
  React.useEffect(() => {
    setAuthData();
    getNotificaciones();
    //console.log(AuthData)
  }, [SetNotifs]);
  React.useEffect(() => {
    // console.log(AuthMensaje)
  }, [AuthMensaje]);
  */
  return (
    
    <View style={styles.listWrapper}>
      {/* <CardMenuSuperior></CardMenuSuperior> */}
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
          ))
        }
        data={Notifs}
        renderItem={({ item, index, separators }) => (
          <View style={styles.cardWrapper}>
            {/* <TouchableHighlight
              key={item.idCuerpo}
              onPress={() => {
                console.log(item.idCuerpo);
              }}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            > */}
            <Card
              key={item.id}
              onPress={(props) => {
                //console.log(item.id);
                mostrarDetalle(item.id)
              }}
              header={(props) => (
                <CardCustomHeader
                  {...props}
                  titulo={item.asunto}
                  img=""
                  /*img={item.img}*/
                />
              )}
            >
              <CardBody text={item.mensaje}></CardBody>
            </Card>
            {/* </TouchableHighlight> */}
          </View>
        )}
        
        keyExtractor={(item, index) => item.id.toString()}
        
      />
    </View>
  );
};

const CardCustomHeader = ({ titulo, img }) => (
  <React.Fragment>
    {img !== "" && typeof img !== "undefined" && (
      <Image source={{ uri: img }} style={styles.headerImage} />
    )}
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>{titulo}</Text>
    </View>
  </React.Fragment>
);

const CardBody = ({ text }) => (
  <View style={styles.bodyContainer}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#00acc1",
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
  },
  headerImage: {
    //flex: 1,
    width: "100%",
    height: 150,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 4,
    fontSize: 50,
  },
  cardWrapper: {
    marginHorizontal: 25,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bodyContainer: {
    paddingBottom: 25,
  },
  listWrapper: {
    marginTop: 10,
  },
});

export default ListaNotificaciones;
