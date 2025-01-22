/* eslint-disable react/react-in-jsx-scope */
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import MyComponent from '../Components/MyComponent';
import CarouselComponent from '../Components/CarouselComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.nav}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
      <CarouselComponent stories={true} />
      <View style={styles.carousel}>
        <CarouselComponent home={true} />
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 86})}
      /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
    // backgroundColor:'red',
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 16,
    height: 500, // Add specific height instead
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  nav:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
});
