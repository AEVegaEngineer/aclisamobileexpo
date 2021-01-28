import { View, StyleSheet } from "react-native";
import { AuthContext } from "../../../../Component/context";
import * as React from "react";

import { ImageOverlay } from "../../Global/extra/image-overlay.component";
import {
  EyeIcon,
  EyeOffIcon,
  PersonIcon,
} from "../../Global/extra/icons";
import { Button, Input, Text } from "@ui-kitten/components";



export default function Login(props) {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const { signIn } = React.useContext(AuthContext);

  const onForgotPasswordButtonPress = () => {
    props.navigation && props.navigation.navigate("ForgotPass");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
      
      <ImageOverlay
        style={styles.container}
        source={require("../../../../assets/background.jpg")}
      >
        <View style={styles.headerContainer}>
          <Text category="h2" status="control">
            Bienvenido a 
          </Text>
          <Text category="h1" status="control">
            Aclisa
          </Text>
          <Text style={styles.signInLabel} category="s1" status="control">
            Ingresa con tu cuenta de Aclisa
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            status="control"
            placeholder="Email"
            icon={PersonIcon}
            value={email}
            onChangeText={setEmail}
          />
          
          <Input
            style={styles.passwordInput}
            status="control"
            placeholder="Contraseña"
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              status="control"
              onPress={onForgotPasswordButtonPress}
            >
              ¿Olvido su contraseña?
            </Button>
          </View>
        </View>
        <Button
          style={styles.signInButton}
          size="giant"
        onPress={() => {
          if (email != null && password != null) {
             signIn({ email,password }); 
             
          }
          else {
            alert("Debe escribir su usuario y contraseña")            
          }
          }}
        >
          Ingresar
        </Button>
        </ImageOverlay>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 220,
   
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
    marginBottom:30,
    backgroundColor:"#00acc1"
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },

  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

});
