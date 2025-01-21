/* eslint-disable eol-last */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import SettingsScreen from '../Screens/SettingsScreen';
import { Dimensions, StyleSheet } from 'react-native';
import ExplorerScreen from '../Screens/ExplorerScreen';
import AllVideosScreen from '../Screens/AllVideosScreen';

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
               tabBarPressColor: '#e91e6333', // Ripple color on press (Android)
               tabBarScrollEnabled: false, // Set true if you have many tabs
               swipeEnabled: true, // Enable swipe gestures
               animationEnabled: true, // Enable animations when switching tabs
               // Lazy loading
               lazy: true,
               lazyPreloadDistance: 2, // Preload 2 tabs away
               // Optional custom tab width
               tabBarItemStyle: {
                 width: Dimensions.get('window').width / 3,
               },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Profile" component={ExplorerScreen} options={{ title: 'Explorer' }} />
      <Tab.Screen name="Settings" component={AllVideosScreen} options={{ title: 'AllVideos' }} />
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
    backgroundColor: '#ffffff',
    elevation: 4, // Android shadow
    shadowColor: '#000000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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