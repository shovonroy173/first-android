/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import {
  // Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DetailsScreen from './src/Screens/DetailsScreen';
// import TabNavigator from './src/TabNavigator/TabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabNavigator from './src/TopTabNavigator/TopTabNavigator';
import DetailsScreen from './src/Screens/DetailsScreen';



// function Section({children, title}) {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  // const Stack = createNativeStackNavigator();
      const Tab = createBottomTabNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.bottomTabBar,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#666666',
        headerShown: false,
      }}
    >
      <Tab.Screen name="TopTabNavigator" component={TopTabNavigator}  />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Tab.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
    </Tab.Navigator>
  </NavigationContainer>
  </GestureHandlerRootView>

  );
}


export default App;


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
  bottomTabBar: {
    backgroundColor: '#ffffff',
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
