import {
    StyleSheet
} from 'react-native'
import Constants from "expo-constants";
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 25,
    },
    textAlignCenter: {
        marginTop: 50,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageOverlay: {
        aspectRatio: 1,
        resizeMode: 'contain',
        width: '38%',
        height: '100%',
        position: "relative", // porque es el padre
        marginTop: 150,
    },
    TextOverlay: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: "white",
        position: "absolute", // child
        //bottom: '20%', // position where you want
        marginHorizontal: '2%',
        width: '26%',
        marginBottom: 0,
        marginTop: '15%'
    },
    h2: {
        textAlign: 'center',
        fontSize: 40,
    },
    h1Bold: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    h2Bold: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
    h3Bold: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    stretch: {
        width: '100%',
        // height: 200,  
        aspectRatio: 1.5,
        resizeMode: 'contain',
    },
    imageContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: '15%',
        width: '80%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '5%',
    },
    col12: {
        width: '100%',
    },
    col8: {
        justifyContent: 'space-around',
        // padding: '5%',
        marginLeft: '12.5%',
        width: '75%',
        marginBottom: 0,
    },
    col7: {
        justifyContent: 'space-around',
        marginLeft: '20.83%',
        width: '58.33%',
        marginBottom: 25,
    },
    col6: {
        // flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        // padding: '5%',
        marginLeft: '25%',
        width: '50%',
        marginBottom: 25,
    },
    col4: {
        width: '33.332%',
    },
    col3: {
        width: '25%',
    },
    logoutMedicoIconWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
    },
    logoutMedicoIcon: {
        flexDirection: 'column',
    },
    logoutMedicoIconRight: {
        flexDirection: 'column',
        left: 200
    }
 
});
 
 
export const LG = StyleSheet.create({
    logoutMedicoIconWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
    },
    logoutMedicoIcon: {
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ECF0F1',
        padding: 8
    },
    textStyle: {
        fontSize: 40,
        textAlign: 'center',
        // paddingTop: Constants.statusBarHeight,
        marginTop: '100%',
        color: '#3FA9F5',
        // backgroundColor: '#fff',
    },
    imageCentral: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 15,
    },
    container: {
        marginTop: '60%'
    }
})
export const TurnoChoseen = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#DCDEF5',
        height: '50%',
        width: '100%',
        // paddingTop:200,
        // paddingBottom:400,
        //   borderRadius:10,
    },
    textStyleTitle: {
        fontSize: 36,
        paddingVertical: 5,
        textAlign: 'center',
    },
    textStyle: {
        fontSize: 30,
        paddingVertical: 5,
        textAlign: 'center',
    },
    textStyleMedic: {
        fontSize:32,
        marginTop: 16,
        textAlign: 'center',
    },
    textMedico: {
        paddingTop: 105,
        fontSize: 20,
        textAlign: 'center',
    },
    containerButton: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '45%',
        height: 40
    },
})
export const RG = StyleSheet.create({
 
    containerLoad: {
        flex: 1,
        justifyContent: "center"
    },
    
    horizontalLoad: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlignVertical:'center'
    },
    containerButtonReg: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonGoWrapperReg: {
        fontSize: 50,
        width: '80%',
        marginBottom: 80
    },
    buttonGoWrapperRegGoogle: {
        // fontSize: 50,
        // width: '80%',
        // marginBottom: 80
        marginTop: 140,
        height: 50,
    },
    buttonGoTextRegGoogle: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3FA9F5',
        borderBottomColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    buttonGoTouchableReg: {
        elevation: 2,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    buttonGoTextReg: {
        textAlign: 'center',
        color: '#3EA8F4',
        fontSize: 20,
        fontWeight: 'bold',
        height: '100%',
    },
    buttonGoTextReg1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3EA8F4',
        marginBottom: 10,
        marginTop: -6,
    },
    textStyle: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        // paddingTop: Constants.statusBarHeight,
        color: '#fff',
        fontWeight: 'bold',
        left: 50,
        // backgroundColor: '#fff',
    },
    textStyleG: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
        // paddingTop: Constants.statusBarHeight,
        color: '#F5FAFD',
        fontWeight: 'bold',
        left: 50,
        // backgroundColor: '#fff',
    },
    textStyleGiN: {
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        color: '#F5FAFD',
        fontWeight: 'bold',
    },
    textStyleSubtitle: {
        fontSize: 16,
        marginBottom: 0,
        top: -20,
        left: 58,
        textAlign: 'center',
        paddingTop: 0,
        paddingBottom: 4,
        color: '#fff',
        fontWeight: 'bold',
        width: '95%',
        alignSelf: 'center'
        
    },
    backgroundImage: {
        position: 'absolute',
        height: '110%',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
    },
    backgroundImage2: {
        position: 'absolute',
        top: '84%',
        height: '40%',
        width: '64%',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        alignSelf: 'center'
    },
    backgroundImagegoogle: {
        position: 'absolute',
        top: -4,
        // left: 10,
        height:20,
        width: 20,
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
    },
    backgroundImageGoogleR: {
        position: 'absolute',
        top: 360,
        height: '60%',
        width: '100%',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        alignSelf: 'center'
    },
    backgroundImageLogo: {
        position: 'absolute',
        top: 0,
        left: 10,
        height: '80%',
        width: '18%',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
    },
    Card: {
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 12,
    },
    textStyleWellcomeLogin: {
        fontSize: 34,
        marginBottom: -54,
        top: -10,
        marginBottom: 10,
        textAlign: 'center',
        paddingTop: Constants.statusBarHeight,
        color: '#848484',
        fontWeight: 'bold',
    },
    CardGoogle: {
        backgroundColor: 'white',
        width: '86%',
        alignSelf: 'center',
        borderRadius: 12,
    },
    textStyleWellcome: {
        fontSize: 30,
        marginBottom: -54,
        top: -10,
        textAlign: 'center',
        paddingTop: Constants.statusBarHeight,
        color: '#848484',
        fontWeight: 'bold',
    },
    
    containerWelcome: {
        fontSize: 60,
        top: 22,
        textAlign: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        height: '95%',
        width: '100%',
        position: 'absolute',
    },
    containerWelcomeG: {
        fontSize: 60,
        top: 22,
        textAlign: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#3FA9F5',
        height: '95%',
        width: '100%',
        position: 'absolute',
    },
    buttonInline: {
        width: '45%',
        height: 40,
    },
    inputIcon: {
        // paddingTop:20,
        width: '15%',
        height: '85%',
        left: '300%',
        top: '16%',
    },
    inputLabel: {
        width: '102%',
        height: '85%',
    },
    text: {
        fontSize: 25,
    },
    stretch: {
        width: '100%',
        // height: 200,    
        aspectRatio: 1.5,
        resizeMode: 'contain',
 
    },
    imageContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: '15%',
        width: '80%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '5%',
    },
    mt1: {
        marginTop: 50
    },
    containerButton: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerButtonA: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonGoWrapperA: {
        fontSize: 50,
        width: '80%'
    },
    buttonGoTouchable: {
        elevation: 2,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonGoWrapper: {
        fontSize: 50,
        width: '80%'
    },
    containerButtonLogin1: {
        marginTop: 12,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerButtonLoginG: {
        marginTop: '20%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    link: {
        fontSize: 22,
        marginTop: -20,
        textAlign: "center",
        color: '#848484',
        marginBottom: 60,
    },
    containerButton: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
 
})
 
export const Cl = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#788EED',
        padding: 5,
        height: 'auto',
        width: 'auto',
    },
    containerIcon: {
        paddingLeft: '50%',
        marginLeft: -30,
    },

    containerTopMedical: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#9cd681',
        padding: 5,
        height: 'auto',
        width: 'auto',
 
    },
    containerTopMedicalMenu: {
        backgroundColor: '#9cd681',
        height: 'auto',
        paddingLeft:20,
        width: '30%',
        marginLeft: -300
    },

    containerTopMedicalMenuIcon: {
        backgroundColor: '#9cd681',
    },
////
    containerPac: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#788EED',
        padding: 5,
        height: 60,
        width: 'auto',
    },

    containerTopMedicalPac: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#788EED',
        padding: 5,
        height: 'auto',
        width: 'auto',
 
    },
    containerTopMedicalMenuPac: {
        backgroundColor: '#788EED',
        height: 'auto',
        paddingLeft:20,
        width: '30%',
        marginLeft: -300
    },

    containerTopMedicalMenuIconPac: {
        backgroundColor: '#788EED',
    },
    containerTextPac: {
        paddingTop: Constants.statusBarHeight,
        color: 'white',
        padding: 2,
        marginTop: -65,
        fontSize: 18
    },
    containerTextPacEsp: {
        paddingTop: Constants.statusBarHeight,
        color: 'white',
        padding: 2,
        marginTop: -30,
        fontSize: 15
    },
    ////

    containerOutBox: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        padding: 15,
        height: 'auto',
        width: 'auto',
 //ahora
    },
    containerTextOutBox: {
        paddingTop: Constants.statusBarHeight,
        color: 'black',
        fontSize: 20,
    },
    containerText: {
        paddingTop: Constants.statusBarHeight,
        color: 'white',
        padding: 2,
        marginTop: -50,
        fontSize: 14
    },
    containerText1: {
        paddingTop: Constants.statusBarHeight,
        color: 'white',
        padding: 2,
        marginTop: -60,
        fontSize: 20
    },
    calendarStyle: {
        justifyContent: 'center',
 
    }
    
})
export const SelProfesiona = StyleSheet.create({
    contenedorImg: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        paddingTop: 0,
        //  height:'100%',
        width: '100%',
    },
    ImageOverlay: {
        //aspectRatio:1,    
        //resizeMode: 'contain',
        width: '100%',
        height: '80%',
        position: "relative", // porque es el padre
        //bottom: 0,
        //top: 150,
        marginHorizontal: 0,
        paddingHorizontal: 0,
        marginBottom: -30,
        paddingBottom: 5,
    },
    TextIcon: {
        fontWeight: 'bold',
    },
    ImageOverlayChild: {
        width: 30,
        height: 30,
        position: "absolute", // child
        //bottom: '20%', // position where you want
        marginHorizontal: '2%',
        marginBottom: 0,
        marginTop: '2%'
    },
    Buscador: {
        flex: 1,
        // paddingTop:'80%',
        paddingTop: 0,
        width: '100%',
        height: '100%',
        paddingRight: 10,
        paddingLeft: 10,
    },
    containerButton: {
        paddingTop: 0,
        alignSelf: 'center',
        width: '50%',
 
    },
    button: {
        flex: 1,
 
    },
    title: {
        paddingBottom: 20,
        padding: 0,
        textAlign: 'center',
        fontSize: 26
    }
 
})
export const ccMedico = StyleSheet.create({
    navContainer: {
        height: Constants.HEADER_HEIGHT,
        marginHorizontal: 10,
      },
      statusBar: {
        height: Constants.STATUS_BAR_HEIGHT,
        backgroundColor: 'transparent',
      },
      navBar: {
        // height: Constants.NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'transparent',
      },
      titleStyle: {
          width:'100%',
        elevation: 2,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor:'white',
        color: '#4FAE6A',
        fontWeight: 'bold',
        fontSize: 40,
      },
    containerTopMedical: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9CD681',
        padding: 0,
        height: 'auto',
        width: 'auto',
        borderBottomWidth: .2,
        borderColor: "#20232a",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
 
        elevation: 5,
    },
 
    containerSubtitle: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        padding: 5,
        height: 'auto',
        width: 'auto',
    },
    containerTopMedicalMenu: {
        backgroundColor: '#9CD681',
        height: 'auto',
        paddingLeft:20,
        width: '30%',
        marginLeft: -300
    },
    containerTopMedicalMenuIcon: {
        backgroundColor: '#9CD681',
    },
    containerTotalMedical: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#a0bb3082',
        height: 'auto',
        width: 'auto',
        padding: 0,
        paddingLeft: 25,
        paddingRight: 25,
        // marginTop: 6,
        borderBottomWidth: .2,
        borderColor: "#20232a",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
 
        elevation: 3,
    },
    containerListSection: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
 
        paddingLeft: 5,
        paddingRight: 5,
    },
    containerText: {
        color: 'white',
        padding: 5,
        fontSize: 20,
        marginTop: -30
    },
    containerTotalText: {
        color: 'white',
        fontSize: 29,
        fontWeight: 'bold'
        
    },
    containerBlackText: {
        color: 'black',
        padding: 5,
        fontSize: 30,
    },
 
    containerDatesPickersTitles: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    containerDatesPickers: {
        flexDirection:'row-reverse',
        // justifyContent:'space-around',
        height: 'auto',
        width: '115%',
        // paddingRight:50,
        paddingBottom: 0,
    },
 
    containerButtonsInLine: {
        marginBottom: '5%',
        width: '50%',
        // marginLeft:'3%',
        height: 50,
    },
    containerFilterOS: {
        width: 'auto',
        // marginLeft:'3%',
        height: 'auto',
    },
    tableTextContainer: {
        height: 'auto',
        width: 'auto',
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor:'#A9A9A9',
        borderBottomWidth:0.5

    },
    tableText: {
 
        backgroundColor: '#fff',
        fontSize: 19,
        height: '100%',
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
    },
    containerTableTitle: {
        color: 'black',
        marginTop: 16,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 18,
        backgroundColor: '#fff',
        textAlign: 'justify',
        alignContent: 'space-around',
        borderBottomWidth: .2,
        borderColor: "#20232a",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
 
        elevation: 5,
        textAlign: "center",
    },
    containerFullScreen: {
        backgroundColor: '#fff',
        height: '100%',
        width: 'auto',
        paddingBottom:0
    },
    backgroundImage2: {
        position: 'absolute',
        top: 500,
        height: '40%',
        width: '50%',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        alignSelf: 'center'
    },

})
export const MI = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#788EED',
        padding: 5,
        height: 'auto',
        width: 'auto',
 
    },
    containerText: {
        // paddingTop: Constants.statusBarHeight,
        color: 'white',
        padding: 5,
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
        backgroundColor: '#9CD681',
    },
    containerAction: {
        // paddingTop: Constants.statusBarHeight,
        color: 'black',
        padding: 5,
        fontSize: 28,
        marginTop: 10,
        marginBottom: 10
    },
    containerTopMedical: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9CD681',
        padding: 0,
        height: 'auto',
        width: '100%',
    },
    containerTopMedicalMenu: {
        backgroundColor: '#9CD681',
        height: 'auto',
        paddingLeft:20,
        width: '30%',
        marginLeft: 10
    },
    containerTopMedicalMenuIcon: {
        backgroundColor: '#9CD681',
    },
    containerTopMedicalAction: {
        marginTop: '2%',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 0,
        height: 'auto',
        width: 'auto',
    },
    containerFullScreen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    containerCards: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Cards: {
        width: '40%',
        height: 150
    },
    CardsText: {
        
    },
    CardsTextTitle: {
        left: '16%'
    },
    CardsTextTitler: {
        left: '12%'
    },
    containerTop:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
},
})
