import {
  StyleSheet
} from 'react-native'
import Constants from "expo-constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const stylesMedico = StyleSheet.create({
  container: {
    // marginTop: '100%',
    backgroundColor: '#F5FAFD',
    height: '100%'
  },
  header: {
    top: '2%'
  },
  body: {
    marginTop: '-10%',
    alignSelf: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    width: '90%',
    fontSize: RFValue(24, 420),
  },
  card: {
    alignSelf: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    marginTop: '20%',
    width: '60%',
    height: 80,
    // 
    // height:150,
    // width:"80%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardImage: {
    // alignSelf: 'center',
  },
  cardImageCircle: {
    alignSelf: 'center',
    marginTop: '-20%',
    top: 10,
    width: 50,
    height: 50,
    flex: 1,
    resizeMode: 'contain',
  },
  cardText: {
    textAlign: 'center',
    // marginTop: '-50%',
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#92B913',
    textAlignVertical: 'center',
    marginTop: '7%'
  },
  backgroundImage: {
    position: 'absolute',
    top: '6%',
    height: '50%',
    width: '86%',
    flex: 1,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
  Title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    marginTop: '10%',
  },
  TitleIni: {
    fontSize: RFPercentage(5),
    textAlign: 'center',
    color: '#92B913',
    fontWeight: 'bold',
    marginTop: '14%',
    marginLeft: '24%',
  },
  subTitleIni: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#92B913',
    marginLeft: '24%',
  },
  pIni: {
    fontSize: RFPercentage(3),
    textAlign: 'center',
    color: '#7E8469',
    marginTop: '10%',
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  draBot: {
    position: 'absolute',
    marginTop: '10%',
    top: 10,
    left: 5,
    height: 50,
    width: 75,
    flex: 1,
    resizeMode: 'stretch',
  },

})