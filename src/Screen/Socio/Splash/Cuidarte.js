import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react';
import { styles } from '../../../../Asset/estilos/Styles'
import { AsyncStorage } from 'react-native';
import { useStateIfMounted } from "use-state-if-mounted";
import { stylesMedico } from '../../../../Asset/estilos/stylesMedico'
import { SafeAreaView } from 'react-native-safe-area-context'
const ImgBg = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../../../Asset/Images/Sinlog/Privacidad/doctores.png')}
      />
    </View>
  );
}

const VerCuidateMedico = ({ navigation }) => {

  const [UserName, SetUsername] = useStateIfMounted('')
  const [Sexo, SetSexo] = useStateIfMounted('')
  React.useEffect(() => {
    NombreUsuario()
    setTimeout(() => {
      navigation.navigate("MedicoInicio")
    }, 3000);
  }, [])

  const NombreUsuario = async () => {
    SetUsername(await AsyncStorage.getItem('UserName'))
    SetSexo(await AsyncStorage.getItem('UserSexo'))
  }

  return (

    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between' }}
    >
      <Image source={require('../../../../Asset/Images/Medico/Cuidarte/bienvenida.png')} style={stylesMedico.backgroundImage} />
      <View style={stylesMedico.container}>
        <Text style={stylesMedico.Title}> Bienvenido </Text>
        {Sexo == 'F' ? <Text style={stylesMedico.Title}> Dra. {UserName} ! </Text> :
          <Text style={stylesMedico.Title}> Dr. {UserName} ! </Text>}
          <Text style={stylesMedico.subTitle}>Gracias por elegirnos nuevamente</Text>
      </View>
    </SafeAreaView>



  )
}

export default VerCuidateMedico