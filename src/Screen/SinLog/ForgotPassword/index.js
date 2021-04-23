import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, Spinner } from "@ui-kitten/components";
import { ImageOverlay } from "../../Global/extra/image-overlay.component";
import { EmailIcon } from "../../Global/extra/icons";
import { Alert } from "react-native";

export default function ForgotPassword(props) {
    const [email, setEmail] = React.useState();

    React.useEffect(() => {}, []);
    
    const recuperarContrasena = async (email) => {
        console.log('recuperando contrasena para el email '+email);
        const recover = await enviarEmail(email);
        const r = recover.Respuesta;
        console.log(r);
        let msg = '',title = '';
        if(r.resultado == false){
            msg =  r.msj+'. '+r.data.Exception;
            title = 'Ha ocurrido un error';
            RecoverAlert(msg, title, false);
        } else {
            msg =  r.msj;
            title = '¡Información enviada!';
            RecoverAlert(msg, title, true);
        }
        //props.navigation.goBack();
    }
    function RecoverAlert(msg, title, status) {
        Alert.alert(
          title,
          msg,
          status ? [{ text: "OK", onPress: () => {
              console.log("Alerta cerrada");
              props.navigation.goBack();
            } }] : null,
          { cancelable: true }
        );
      }

    const enviarEmail = (email) => {
        const recoveryEndpoint = "https://aclisasj.com.ar:8055/security/users/resetPassword";
        const cuerpo = JSON.stringify({
            'username':email
          });
        return fetch(recoveryEndpoint, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body:cuerpo
        })
        .then((response) => { return response.json() })
        .catch(function(err) { console.log(err) })
    }

    return (
        
            <ImageOverlay
                style={styles.container}
                source={require("./../../../../assets/medic-bg.jpg")}
            >
                <Text
                    style={styles.forgotPasswordLabel}
                    category="h2"
                    status="control"
                >
                    Recuperar contraseña
                </Text>
                <Text style={styles.enterEmailLabel} status="control">
                    Por favor ingrese su mail
                </Text>
                <View style={styles.formContainer}>
                    <Input
                        status="control"
                        placeholder="Email"
                        icon={EmailIcon}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Button 
                size="large" 
                style={styles.recoverButton}
                onPress={() => recuperarContrasena(email)}
                >
                    Recuperar contraseña
                </Button>
            </ImageOverlay>
        // </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    recoverButton: {
        marginHorizontal: 16,
        marginBottom:30,
        backgroundColor:"#00acc1"
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    formContainer: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 24,
    },
    forgotPasswordLabel: {
        //   zIndex: 1,
        alignSelf: "center",
        marginTop: 24,
        marginBottom:'5%',
    },
    enterEmailLabel: {
        zIndex: 1,
        alignSelf: "center",
        marginTop: 64,
    },
    containerSpinner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lottie: {
        width: 100,
        height: 100,
    },
});
