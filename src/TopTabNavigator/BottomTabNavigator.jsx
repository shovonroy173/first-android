/* eslint-disable no-trailing-spaces */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import TopTabNavigator from './TopTabNavigator';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import TopTabNavigator from './TopTabNavigator';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
    }}>
        <Tab.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{title: 'TopTabNavigator'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Details'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
