import { TouchableOpacity,Text, View, Image } from 'react-native'
import { Button } from 'react-native-elements'
import * as React from 'react';
import { getTheme } from 'react-native-material-kit';
import { LG } from '../../../../Asset/estilos/Styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { stylesGral } from '../../../../Asset/estilos/stylesGral';
import { captureScreen } from "react-native-view-shot";
import * as Sharing from 'expo-sharing'; 


const theme = getTheme();

export default class Land extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        show : false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true }) 
    }, 2000)    
    }
    
    render() {
        return (
            this.state.show == false ? (null)
                :
            <SafeAreaView
                style={{ flex: 1, justifyContent: 'space-between' }}
            >
                <Image source={require('../../../../assets/icon.png')} style={stylesGral.landing} />
                <View style={LG.conteiner}>
                    <Text style={LG.textStyle}> Hola desde el más allá </Text>
                    <View style={stylesGral.boxButtons}>
                        <TouchableOpacity style={stylesGral.buttonsLanding} onPress={() => this.props.navigation.navigate("Login")}>
                            <Text style={stylesGral.textButtons}>¡Vamos!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}


