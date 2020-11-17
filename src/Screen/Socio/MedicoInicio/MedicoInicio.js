import { StyleSheet, Image, Alert, Text, View, BackHandler } from 'react-native'
import React, { Component } from 'react';
import { MI } from '../../../../Asset/estilos/Styles'
import { AsyncStorage } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStateIfMounted } from "use-state-if-mounted";
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../../../Component/context'
import { stylesPaciente } from '../../../../Asset/estilos/stylesPaciente'
import { stylesMedico } from '../../../../Asset/estilos/stylesMedico'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from 'react-native-vector-icons/Ionicons'



export default function MedicoInicio(props) {

    const [doctorName, SetDoctorName] = useStateIfMounted('')
    const [SSexo, SetSSexo] = useStateIfMounted('')
    const { signOut } = React.useContext(AuthContext);


    const [UserName, SetUsername] = useStateIfMounted('')

    // const handleBackButton = () => {
    //     return true;
    // }
    React.useEffect(() => {
        // BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        NombreUsuario()
        getNameDoctor()
    })


    React.useEffect(() => {
        const backAction = () => {
            Alert.alert("Hey", "Estas seguro que quieres salir?", [
                {
                    text: "NO",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "SI", onPress: () => signOut() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []
    );

    const NombreUsuario = async () => {
        SetUsername(await AsyncStorage.getItem('UserName'))
    }
    const getNameDoctor = async () => {
        const name = await AsyncStorage.getItem('UserName')
        const sexo = await AsyncStorage.getItem('UserSexo')
        let SaludoSexo = ''
        if (sexo === 'M') {
            SaludoSexo = 'Dr.'
        }
        else {
            SaludoSexo = 'Dra.'
        }
        SetDoctorName(name)
        SetSSexo(SaludoSexo)
    }
    const IconPacientes = () => (
        <Avatar.Icon size={75} icon="calendar" />
    );
    const IconProduccion = () => (
        <Avatar.Icon size={75} icon="calculator" />
    );

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between' }}
        >
            <View style={stylesMedico.container}>
                <View style={stylesPaciente.header}>
                    <View style={stylesPaciente.menu}>
                        <Icons.Button style={stylesPaciente.menuButton} name='ios-menu' size={30} color='#3FA9F5' onPress={() => { props.navigation.openDrawer() }} />
                    </View>
                </View>
                <View style={stylesMedico.body}>
                    <Image source={require('../../../../Asset/Images/Medico/dra.png')} style={stylesMedico.draBot} />
                    <Text style={stylesMedico.TitleIni}>Hola :) {SSexo} {doctorName}</Text>
                    <Text style={stylesMedico.subTitleIni}>¿En que podemos ayudarte hoy?</Text>
                </View>
                <Text style={stylesMedico.pIni}>En este espacio podrás encontrar desde tu agrenda de turnos hasta los movimientos de tu cuenta corriente con nosotros.</Text>
                <View style={stylesMedico.card}>
                    <View style={stylesMedico.cardImage}>
                        <Image source={require('../../../../Asset/Images/Medico/users.png')} style={stylesMedico.cardImageCircle}/>
                    </View>
                    <View style={stylesMedico.cardText}>
                        <Text style={stylesMedico.cardTitle}>Agenda de Turnos</Text>
                    </View>
                </View>
                <View style={stylesMedico.card}>
                    <View style={stylesMedico.cardImage}>
                        <Image source={require('../../../../Asset/Images/Medico/ctacte.png')} style={stylesMedico.cardImageCircle}/>
                    </View>
                    <View style={stylesMedico.cardText}>
                        <Text style={stylesMedico.cardTitle}>Cuenta Corriente</Text>
                    </View>
                </View>
                {/* <Image source={require('../../../../Asset/Images/Medico/agendaTurno.png')} style={stylesMedico.box1} /> */}
                {/* <Image source={require('../../../../Asset/Images/Medico/cuentaCte.png')} style={stylesMedico.box2} /> */}

            </View>
        </SafeAreaView>
        // <View style={MI.containerFullScreen}>
        //     <View style={MI.containerTop}>
        //         <View style={MI.containerTopMedicalMenu}>
        //             <Icon.Button style={MI.containerTopMedicalMenuIcon} name='ios-menu' backgroundColor='#9CD681' size={30} color='white' onPress={() => { props.navigation.openDrawer() }} />
        //         </View>
        //         <View style={MI.containerTopMedical}>
        //             <Text style={MI.containerText}> {SSexo}  {doctorName}</Text>
        //         </View>
        //     </View>
        //     <View style={MI.containerTopMedicalAction}>
        //         <Text style={MI.containerAction}>¿Que deseas hacer hoy?</Text>
        //     </View>
        //     <View style={MI.containerCards}>
        //         <View style={MI.Cards}>
        //             <TouchableOpacity onPress={() => props.navigation.navigate('MedicoCalendario')}>
        //                 <Card style={MI.CardsText}>
        //                     <Card.Content>
        //                         <Card.Title left={IconPacientes} />
        //                         <Title style={MI.CardsTextTitle}>Pacientes</Title>
        //                         <Paragraph style={MI.CardsTextTitle}>Aquí tienes tus pacientes a atender.</Paragraph>
        //                     </Card.Content>
        //                 </Card>
        //             </TouchableOpacity>
        //         </View>

        //         <View style={MI.Cards}>
        //             <TouchableOpacity onPress={() => props.navigation.navigate('MedicoScreen')}>
        //                 <Card>
        //                     <Card.Content >
        //                         <Card.Title left={IconProduccion} />
        //                         <Title style={MI.CardsTextTitler}>Producción</Title>
        //                         <Paragraph style={MI.CardsTextTitler}>Aquí tienes tu producción.</Paragraph>
        //                     </Card.Content>
        //                 </Card>
        //             </TouchableOpacity>
        //         </View>

        //     </View>
        // </View>

    )
}
