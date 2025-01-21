import React from 'react';
import {  Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  return (
     <View style={styles.screen}>
            <Text style={styles.text}>Profile Screen</Text>
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
  );
};

export default ProfileScreen;

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
