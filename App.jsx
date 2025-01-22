/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import // Colors,
// DebugInstructions,
// Header,
// LearnMoreLinks,
// ReloadInstructions,
'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DetailsScreen from './src/Screens/DetailsScreen';
// import TabNavigator from './src/TabNavigator/TabNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import HomeScreen from './src/Screens/HomeScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';
// import SettingsScreen from './src/Screens/SettingsScreen';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import TopTabNavigator from './src/TopTabNavigator/TopTabNavigator';
// import DetailsScreen from './src/Screens/DetailsScreen';
import LoginScreen from './src/Screens/LoginScreen';
import BottomTabNavigator from './src/TopTabNavigator/BottomTabNavigator';
import SignupScreen from './src/Screens/SignupScreen';
// import HomeScreen from './src/Screens/HomeScreen';

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
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  return (
    <GestureHandlerRootView style={styles.container} showsHorizontalScrollIndicator={false}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b82f6',
  },
});
