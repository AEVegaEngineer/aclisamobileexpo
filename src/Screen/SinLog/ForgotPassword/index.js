import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, Spinner } from "@ui-kitten/components";
import { ImageOverlay } from "../../Global/extra/image-overlay.component";
import { EmailIcon } from "../../Global/extra/icons";
import { KeyboardAvoidingView } from "../../Global/extra/3rd-party";
import LottieView from "lottie-react-native";

export default function ForgotPassword(props) {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [getStatus, setStatus] = React.useState(false);

    React.useEffect(() => {}, []);
    const onSignInButtonPress = () => {
        navigation && props.navigation.goBack();
    };

    const onSignUpButtonPress = () => {
        navigation && props.navigation.navigate("SignUp4");
    };

    const onForgotPasswordButtonPress = () => {
        navigation && navigation.navigate("ForgotPassword");
    };

    const onPasswordIconPress = () => {
        setPasswordVisible(!passwordVisible);
    };

    const LoadingScreen = () => (
        <View style={styles.containerSpinner} level="1">
            <Spinner size="giant" status="success" />
        </View>
    );

    return (
        
            <ImageOverlay
                style={styles.container}
                source={require("./assets/image-background.jpg")}
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

                <Button size="large" onPress={() => setStatus(true)}>
                    Recuperar cuenta
                </Button>
            </ImageOverlay>
        // </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
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
