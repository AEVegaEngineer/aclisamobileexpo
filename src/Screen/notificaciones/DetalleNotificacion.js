import React from "react";
import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from "expo-secure-store";
import {
  Card,
  Button,
  Text,
} from "@ui-kitten/components";
import moment from "moment";
moment.locale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
}
);
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

//trucos para el lenguaje de moment
moment.locale(['es', 'es'])

const DetalleNotificacion = ({ navigation }) => {
  const [item, SetItem] = React.useState({'asunto':'test','img':'','link':'','mensaje':'test'});  

  const getNotificacion = async () => {
    var notif = await AsyncStorage.getItem('NotifSeleccionada');
    notif = JSON.parse(notif);
    //console.log(notif)
    SetItem(notif[0]);
    if(notif[0].estado === false){
      //console.log("la notif no ha sido leida")
      marcarMensaje(notif[0].id,"true");
    }    
  }

  const redirigirAsync = async () => {
    await WebBrowser.openBrowserAsync(item.link);
  };

  const marcarMensaje = async(id,estado) => {
    const token = await SecureStore.getItemAsync("token");
    var marcarNotificacionesEndpoint = "http://66.97.39.24:8044/mensajes/msjCuerpo/changeEstado/"+id+"/"+estado;
    //console.log(marcarNotificacionesEndpoint);
    //console.log(token)
    fetch(marcarNotificacionesEndpoint, {
      method: "PUT",
      headers: {
        "Authorization": token
      }
    })
    .then((response) => { return response.json() })
    .then((responseData) => { // responseData = undefined 
      if(responseData.Respuesta.resultado === true) {
        console.log("cambia notificacion "+id+" al estado "+estado);
      } else {
        console.log("Error, no se ha podido cambiar de estado");
      }
    })
    .catch(function(err) {
        console.log(err);
    })
  }

  React.useEffect(() => {
    getNotificacion();
    //moment.locale('es');
  }, []);

  const marcarComoNoLeido = async(obj) => {
    //console.log);
    await marcarMensaje(obj.itemid,"false");
    navigation.navigate("ListaNotificaciones2");
  }

  const CardFooter = ( itemid, fhcreacion, fhenvio ) => (
    
    <View style={styles.footerContainer}>     
      <View style={styles.footerMarkup}>
        <Text style={styles.detalleFecha}>Fecha de creación del mensaje: {moment(fhcreacion).format('MMMM Do YYYY, h:mm:ss a')}</Text>
        <Text style={styles.detalleFecha}>Fecha de último envío: {moment(fhenvio).format('MMMM Do YYYY, h:mm:ss a')}</Text>
      </View> 
      
      <TouchableOpacity style={{backgroundColor:'#343a40', padding:15, borderRadius:10, marginTop:10, width:'100%'}} activeOpacity={0.6} onPress={() => redirigirAsync()}>
          <Text style={{color:'#fff', textAlign:'center'}}>Más información</Text>          
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#212529', padding:15, borderRadius:10, marginTop:10, width:'100%'}} activeOpacity={0.6} onPress={() => marcarComoNoLeido(itemid)}>
          <Text style={{color:'#fff', textAlign:'center'}}>Marcar como no leído</Text>          
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View style={styles.listWrapper}>
      <View style={styles.cardWrapper}>
        <Card
          header={(props) => (
            <CardCustomHeader
              {...props}
              titulo={item.asunto}
              img={item.img}
              
            />
          )}
        >
          <CardBody 
          text={item.mensaje}>
          </CardBody>

          <CardFooter 
          fhcreacion={item.f_hs_creado} 
          fhenvio={item.f_hs_ultimo_envio}
          itemid={item.id}
          >
          </CardFooter>

        </Card>
      </View>
    </View>
  );
  
};

const CardCustomHeader = ({ titulo, img }) => (
  <React.Fragment>
    {img !== "" && typeof variable !== "undefined" && (
      <Image source={{ uri: img }} style={styles.headerImage} />
    )}
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>{titulo}</Text>
    </View>
  </React.Fragment>
);

const CardBody = ({ text }) => (
  <View style={styles.bodyContainer}>    
    <Text style={styles.detalleText}>{text}</Text>
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
    fontSize: 25,
  },
  headerImage: {
    //flex: 1,
    width: "100%",
    height: 150,
  },
  footerContainer:{

  },
  footerButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent:'center',
    width:'100%',
    backgroundColor:'blue'
  },
  footerControl: {
    marginHorizontal: 0,
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
  detalleText:{
    fontSize: 20
  },
  detalleFecha:{
    fontSize: 14
  },
  footerMarkup:{
    marginVertical: 10    
  }
});

export default DetalleNotificacion;