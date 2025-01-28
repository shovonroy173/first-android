/* eslint-disable react/react-in-jsx-scope */
import {Button, Image, StyleSheet, View} from 'react-native';
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
      <CarouselComponent home={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    gap:20,
    backgroundColor:'white',
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
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
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
