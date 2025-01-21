/* eslint-disable react/react-in-jsx-scope */
import {Button, StyleSheet, Text, View} from 'react-native';
// import MyComponent from '../Components/MyComponent';
// import CarouselComponent from '../Components/CarouselComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.carousel}>
        {/* <CarouselComponent /> */}
        {/* <MyComponent/> */}
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 86})}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  carousel: {
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
