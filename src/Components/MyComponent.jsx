import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';

const MyComponent = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.text}>My Component</Text>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      },
  text: {
    color: '#00000',
    fontSize: 24,
    marginBottom: 16,
  },
});
