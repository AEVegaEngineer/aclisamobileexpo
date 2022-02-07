import * as SecureStore from "expo-secure-store";
export const authDevice = async( tipo, token ) => { 
    
  const expoToken = await SecureStore.getItemAsync("ExpoToken"); //(!t === undefined && t != "") ? t : "simulador";
  if(expoToken != "simulador") {

    const endpoint = (tipo == "insert") ? "insert/mine" : "delete/my";
    const authDeviceURL = "http://aclisasj.com.ar:8044/mensajes/device/"+endpoint;
    const deviceOS = (Platform.OS === "android") ? "android" : "iOS";
    const Datos = { "deviceId" : expoToken };
    if(tipo == "insert")
      Datos["deviceName"] = deviceOS;
    const metodo = (tipo == "insert") ? "POST" : "DELETE";
    //console.log(authDeviceURL);
    //console.log("Authorization: "+token);      
    //console.log({'deviceOS':deviceOS});
    console.log("*************Datos enviados para registrar device");
    console.log(Datos);
    console.log('Headers:');
    console.log({
      "Authorization": token,
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Mobile"
    })
    console.log("*************");
    await fetch(authDeviceURL, {
      method: metodo,
      headers: {
        "Authorization": token,
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Mobile"
      },
      body: JSON.stringify(Datos),
      
    }).then(async(response) => {
      const result = await response.json();
      const data = await result;
      console.log("response:");
      console.log(data);
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
      console.log("error en el catch de authDevice")
      console.log(error)
      LoginAlert(error);
    })
  }   
}