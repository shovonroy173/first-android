import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// const screenWidth = Dimensions.get('window').width;

const CustomButton = ({ title, onPress, backgroundColor, textColor , text}) => {
    return (
    <TouchableOpacity
      onPress={onPress}
    //   disabled={!text}
      style={[styles.button, { backgroundColor } , !text && styles.disabledButton]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    cursor:'pointer',
    width: 300,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#B0BEC5', // Gray background for disabled state
  },
});

export default CustomButton;
