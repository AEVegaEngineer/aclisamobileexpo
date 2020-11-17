import * as React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {
    Text, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, useTheme
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../../../Component/context'
import { useStateIfMounted } from "use-state-if-mounted";
import {VersionActual} from '../../Global/Versionado'
export function DrawcontentSocio(props) {

    const [NomUsu, SetNomUsu] = useStateIfMounted('')
    const [Sex, SetSex] = useStateIfMounted('')

    const GetNombre = async () => {
        SetNomUsu(await AsyncStorage.getItem('UserName'))
        // SetSex(await AsyncStorage.getItem('UserSexo'))
    }

    React.useEffect(() => {
        GetNombre()
    }, [])
    const paperTheme = useTheme();
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                      <View style={styles.userInfoSection}>

                       <View style={{ flexDirection: 'row', marginTop: 15 }}>
                               
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>{NomUsu}</Title>
                                    {/* <Caption style={styles.caption}>@j_doe</Caption> */}
                                </View>
                            </View>
                      
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                       

                         <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="ballot-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Lista de Notificaciones"
                            onPress={() => { props.navigation.navigate('ListaNotificaciones') }}
                        />
                        {/*                         
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Ir a notificaciones de kitten"
                            onPress={() => { props.navigation.navigate('NotificacionesGatito') }}
                        /> 
                        */}

                        {/*
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Salir"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
            <Drawer.Section >
               <Text style={styles.bottomDrawerSectionVersion}>Versión {VersionActual}</Text>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    bottomDrawerSectionVersion: {
        textAlign:'center',
        maxHeight:'auto',
        marginTop:0,
        height:'auto',
        width:'auto',
        borderTopColor: '#f4f4f4',
    },
});