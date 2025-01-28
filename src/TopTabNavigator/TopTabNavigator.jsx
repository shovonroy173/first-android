/* eslint-disable eol-last */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { Dimensions, StyleSheet } from 'react-native';
import Messages from '../Screens/Messages';

const TopTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
         tabBarStyle: styles.tabBar,
               tabBarLabelStyle: styles.tabLabel,
               tabBarIndicatorStyle: styles.tabIndicator,
               tabBarActiveTintColor: '#e91e63',
               tabBarInactiveTintColor: '#666666',
               tabBarPressColor: '#e91e6333',
               tabBarScrollEnabled: false,
               swipeEnabled: true,
               animationEnabled: true,
               lazy: true,
               lazyPreloadDistance: 2,
               tabBarItemStyle: {
                 width: Dimensions.get('window').width / 3,
               },
               backgroundColor:'#3b82f6',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Messages" component={Messages} options={{ title: 'Messages' }} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  tabBar: {
    // backgroundColor: '#ffffff',
    // elevation: 4, // Android shadow
    // shadowColor: '#000000', // iOS shadow
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    display:'none',
  },
  tabLabel: {
    fontSize: 14,
    textTransform: 'none', // Removes all-caps styling
    fontWeight: '600',
  },
  tabIndicator: {
    backgroundColor: '#e91e63',
    height: 3,
  },
  badgeContainer: {
    backgroundColor: '#e91e63',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 4,
    right: 4,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 6,
  },
});