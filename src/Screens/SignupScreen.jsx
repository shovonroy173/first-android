import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  // Text,
  TextInput,
  // TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../Components/CustomButtom';


const SignupScreen = ({route, navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <CustomButton
        title="Signup"
        onPress={() => navigation.navigate('BottomTabNavigator')}
        backgroundColor="#60a5fa"
        textColor="#ffffff"
        text={text}
      />

    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    gap:20,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    height: 40,
    width: 300,
    paddingHorizontal: 20,
  },
  signupbox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  signuptext: {
    color: 'blue',
    fontSize: 12,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});
