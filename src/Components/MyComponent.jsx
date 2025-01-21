import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import Text from react-native, not gesture-handler

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 16,
  },
});

export default MyComponent;
