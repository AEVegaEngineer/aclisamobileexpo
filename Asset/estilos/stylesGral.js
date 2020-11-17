import {
  StyleSheet
} from 'react-native'
import Constants from "expo-constants";

export const stylesGral = StyleSheet.create({
  containerG: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlignVertical: 'center'
  },

  landing: {
    position: 'absolute',
    top: '6%',
    height: '50%',
    width: '86%',
    flex: 1,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
  container: {
    top: 22,
    textAlign: 'center',
    backgroundColor: '#fff',
    height: '95%',
    width: '100%',
    position: 'absolute',
  },

  backgroundImage: {
    position: 'absolute',
    height: '110%',
    flex: 1,
    resizeMode: 'stretch',
  },
  Logo: {
    position: 'absolute',
    top: 0,
    left: 10,
    height: '80%',
    width: '18%',
    flex: 1,
    resizeMode: 'stretch',
  },
  textContent: {
    marginTop: '2%',
  },
  textContentIni: {
    marginTop: '2%',
    marginBottom: '4%',
  },
  textTitle: {
    fontSize: 30,
    marginBottom: '6%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    left: '20%',
  },
  textSubtitle: {
    fontSize: 16,
    marginBottom: 0,
    top: '-30%',
    left: '20%',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 4,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textTitleIni: {
    fontSize: 30,
    marginBottom: '6%',
    textAlign: 'center',
    color: '#9a9a9a',
    fontWeight: 'bold',
    top: '435%',
  },
  textSubtitleIni: {
    fontSize: 16,
    marginBottom: 0,
    top: '-30%',
    top: '404%',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 4,
    color: '#9a9a9a',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  Card: {
    alignSelf: 'center',
    top: 0,
    marginTop: '10%',
    borderRadius: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingBottom: '10%',
    paddingTop: '5%',
    width: '85%',
    // sombra
    elevation: 4,
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  CardRegister: {
    alignSelf: 'center',
    top: 0,
    marginTop: '0%',
    borderRadius: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingBottom: '10%',
    paddingTop: '5%',
    width: '85%',
    // sombra
    elevation: 4,
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  textTitleCard: {
    fontSize: 30,
    marginBottom: '10%',
    top: '0%',
    textAlign: 'center',
    color: '#848484',
    fontWeight: 'bold',
  },
  boxButtons: {
    marginTop: '4%',
  },
  buttons: {
    width: '100%',
    marginTop: '4%',
    alignSelf: 'center',
    backgroundColor: "#fff",
    // sombra
    elevation: 6,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonsLanding: {
    width: '70%',
    marginTop: '4%',
    alignSelf: 'center',
    backgroundColor: "#fff",
    // sombra
    elevation: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  boxButtonsIni: {
    marginBottom: '25%',
  },
  buttonsIni: {
    width: '50%',
    alignSelf: 'center',
    backgroundColor: "#fff",
    marginBottom: '6%',
    // sombra
    elevation: 6,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  logoGoogle: {
    position: 'absolute',
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  textButtons: {
    color: '#3FA9F5',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButtonsIni: {
    color: '#3FA9F5',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backgroundPers: {
    position: 'absolute',
    top: '80%',
    height: '40%',
    width: '64%',
    flex: 1,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ImageCircleMedic: {
    position: 'absolute',
    marginTop: '10%',
    top: 10,
    left: 10,
    height: 50,
    width: 70,
    flex: 1,
    resizeMode: 'stretch',

  },
  containerLoading: {
    flex: 1,
    justifyContent: "center"
  },
  horizontalLoading: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
})