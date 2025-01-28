import React from 'react';
import {  Button, Image, StyleSheet, Text, View } from 'react-native';
// import CarouselComponent from '../Components/CarouselComponent';

const SinglePost = ({ route, navigation }) => {
  return (
     <View style={styles.screen}>
            <Image source={}/>
          </View>
  );
};

export default SinglePost;

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
