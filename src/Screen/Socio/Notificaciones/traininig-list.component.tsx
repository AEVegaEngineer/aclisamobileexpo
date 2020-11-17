import React from 'react';
import { AsyncStorage, ListRenderItemInfo, StyleSheet } from 'react-native';
import { List, Text } from '@ui-kitten/components';
import { TrainingCard } from './extra/training-card.component';


// const notificaciones: Training[] = [
//   DataNotificaciones.,
//   Training.workoutEasy(),
//   Training.personalizedEasy(),
//   Training.bicepsMiddle(),
//   Training.chestMiddle(),
//   Training.personalizedMiddle(),

// ];

export const TrainingsListScreen = ({ route }): React.ReactElement => {

  const [getDataNotification,setDataNotification] = React.useState({})
  React.useEffect(() => {
    traer_notificaciones()
  },[])

  const traer_notificaciones = async() => {
    let datos: string = await AsyncStorage.getItem("Notificaciones");
    setDataNotification(datos)
  }
  // const [displayTrainings,setdisplayTrainings ] = React.useState([])

  
  // const motrarNotificaciones: string[] = getDataNotification.filter(notif => notif.level === route.name);
  console.log(getDataNotification)
  

  // const renderVerticalTrainingItem = (info: ListRenderItemInfo<Training>): React.ReactElement => (
  //   <TrainingCard
  //     style={styles.verticalItem}
  //     training={info.item}
  //   />
  // );

  return (
    // <List
    //   contentContainerStyle={styles.list}
    //   data={motrarNotificaciones}
    //   renderItem={renderVerticalTrainingItem}
    // />
    <Text>HEY MAN</Text>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 12,
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
});
