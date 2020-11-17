import { AsyncStorage } from 'react-native';
export default async function GetStorageData(param) {
    const dato = await AsyncStorage.getItem(param);
    //console.log(dato);
    return dato;
}
// export const GetStorageData = async(param) => {
//     const dato = await AsyncStorage.getItem(param);
//     //console.log(dato);
//     return dato;
// }