import React from 'react';
import {  Button, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  return (
    <View style={styles.screen}>
            <Text style={styles.text}>Settings Screen</Text>
            <Button
              title="Go to Profile"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    text: {
      fontSize: 24,
      marginBottom: 16,
    },
  });
