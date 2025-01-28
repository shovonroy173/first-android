/* eslint-disable no-trailing-spaces */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/ProfileScreen';
import UploadScreen from '../Screens/UploadScreen';
import TopTabNavigator from './TopTabNavigator';
import ExplorerScreen from '../Screens/ExplorerScreen';

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
        name="Explorer"
        component={ExplorerScreen}
        options={{title: 'Explorer'}}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{title: 'Upload'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
