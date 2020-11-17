import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab, TabBar } from '@ui-kitten/components';
import { TrainingsListScreen } from './traininig-list.component';
import { DataNotificaciones } from './extra/data'

const TrainingsTabBar = ({ navigation, state }): React.ReactElement => {
  DataNotificaciones()
  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onTabSelect}>
      {state.routeNames.map(renderTab)}
    </TabBar>
  );
};

const TopTab = createMaterialTopTabNavigator();

export default (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <TrainingsTabBar {...props} />}>
    <TopTab.Screen name='Leídas' component={TrainingsListScreen}/>
    <TopTab.Screen name='No leídas' component={TrainingsListScreen}/>
  </TopTab.Navigator>
);
