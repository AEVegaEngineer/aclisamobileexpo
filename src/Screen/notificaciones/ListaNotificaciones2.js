import React from "react";
import {
  Image,
  StyleSheet,
  View,
  FlatList,
  AsyncStorage
} from "react-native";
import {
  Card,
  Text,
} from "@ui-kitten/components";
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

  const [NotifsLeidas, SetNotifsLeidas] = React.useState([]);
  const [NotifsNoLeidas, SetNotifsNoLeidas] = React.useState([]);
  

  React.useEffect(() => {  
    const unsubscribe = navigation.addListener('focus', () => {
      // La pantalla de notificaciones está focuseada
      getNotificaciones();
    });
    // Retorna la función para desuscribirla del evento para que sea removida una vez se desmonte
    return unsubscribe;
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{backgroundColor:'transparent', padding:0}} onPress={() => getNotificaciones()}>
          <Image
          style={{padding:0, width: 40, height: 40, flex:0 }}
          source={require("../../assets/images/sync-flat.png")}
          />          
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  /*
  const mostrarDetalle = async (idcuerpo) => {
    var notifSeleccionada = {}
    Notifs.forEach(notificacion => {
      if(notificacion.id == idcuerpo)
        notifSeleccionada = notificacion      
    });
    console.log(notifSeleccionada)
    await AsyncStorage.setItem('NotifSeleccionada',JSON.stringify(notifSeleccionada))
  }
  */
  const getNotificaciones = async() => {
    const token = await SecureStore.getItemAsync("token");
    //console.log(token);
    var getNotificacionesEndpoint = "http://66.97.39.24:8044/mensajes/msjCuerpo/getAllByUserDestino";
    //console.log("getNotificaciones")
    fetch(getNotificacionesEndpoint, {
      method: "GET",
      headers: {
        "Authorization": token
      }
    })
    .then((response) => 
      {
        //return (testJSON(response.text())) ? response.json() : {}
        return response.json()
      })
    .then((responseData) => { // responseData = undefined  

      const notif = responseData.Respuesta.data.msjCuerpos;
      //ordena por estados
      const noleidos = notif.filter(function filtrarEstado(notif) {
        return notif.estado === false;
      });
      const leidos = notif.filter(function filtrarEstado(notif) {
        return notif.estado === true;
      });
      const notifsOrdenadas = noleidos.concat(leidos);
      //console.log(notifsOrdenadas);
      SetNotifsLeidas(leidos);
      SetNotifsNoLeidas(noleidos);
    })
    .catch(function(err) {
        console.log(err);
    })
  }
  /*
  const verNotifs = () => {
    console.log(Notifs)
  }
  */
  const mostrarDetalle = async (idcuerpo) => {   
    const notifSeleccionadaLeida = NotifsLeidas.filter((notif) => {
      return notif.id == idcuerpo;
    });
    const notifSeleccionadaNoLeida = NotifsNoLeidas.filter((notif) => {
      return notif.id == idcuerpo;
    });
    //console.log((notifSeleccionadaLeida.length !== 0 ) ? notifSeleccionadaLeida : notifSeleccionadaNoLeida)
    
    await AsyncStorage.setItem('NotifSeleccionada',JSON.stringify(
      (notifSeleccionadaLeida.length !== 0 ) ? notifSeleccionadaLeida : notifSeleccionadaNoLeida
      ));
    navigation.navigate("DetalleNotificacion");
    
  }
  return (    
    <View style={styles.listWrapper}>
      {/* <CardMenuSuperior></CardMenuSuperior> */}
      <Text style={{color:"black",fontSize:18, paddingBottom:10, textAlign:"center"}}>No Leídas</Text>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
          ))
        }
        style={{height:"45%"}}
        data={NotifsNoLeidas}
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
              style={styles.card}
              header={(props) => (
                <CardCustomHeader
                  {...props}
                  titulo={item.fechaUltimoEnvio.substring(0,10)+" "+item.asunto.substring(0,17)+"..."}
                  img=""
                  estado={item.estado}
                  /*img={item.img}*/
                />
              )}
            >
              <CardBody text={item.mensaje.substring(0,35)+"..."}></CardBody>
            </Card>
            {/* </TouchableHighlight> */}
          </View>
        )}
        
        keyExtractor={(item, index) => item.id.toString()}
        
      />
      <Text style={{color:"black",fontSize:18, marginVertical:10, textAlign:"center"}}>Leídas</Text>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== "android" &&
          (({ highlighted }) => (
            <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
          ))
        }
        style={{height:"45%"}}
        data={NotifsLeidas}        
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
              style={styles.card}
              header={(props) => (
                <CardCustomHeader
                  {...props}
                  titulo={item.fechaUltimoEnvio.substring(0,10)+" "+item.asunto.substring(0,17)+"..."}
                  img=""
                  estado={item.estado}
                  /*img={item.img}*/
                />
              )}
            >
              <CardBody text={item.mensaje.substring(0,35)+"..."}></CardBody>
            </Card>
            {/* </TouchableHighlight> */}
          </View>
        )}
        
        keyExtractor={(item, index) => item.id.toString()}
        
      />
    </View>
  );
};

const CardCustomHeader = ({ titulo, img, estado }) => (
  <React.Fragment>
    {img !== "" && typeof img !== "undefined" && (
      <Image source={{ uri: img }} style={styles.headerImage} />
    )}
    {estado == false ? (
      <View style={[styles.headerTextContainer,styles.headerSinLeer]}>
        <Text style={styles.headerText}>{titulo}</Text>
      </View>
    ) : (
      <View style={[styles.headerTextContainer,styles.headerLeida]}>
        <Text style={styles.headerText}>{titulo}</Text>
      </View>
    )}   
      
  </React.Fragment>
);

const CardBody = ({ text }) => (
  <View style={styles.bodyContainer}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerLeida:{
    backgroundColor:"#343a40"
  },
  headerSinLeer:{
    backgroundColor: "#00acc1",
  },
  bodyLeida:{
    backgroundColor:"#212529"
  },
  headerTextContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,    
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

    borderRadius: 10,
  },
  card:{
    borderRadius: 10,
  },
  bodyContainer: {
    paddingBottom: 5,
  },
  listWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ListaNotificaciones;
