import * as SecureStore from "expo-secure-store";
export const autologinByToken = async(dispatch) => {
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