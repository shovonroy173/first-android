import React, {useState} from 'react';
import { StyleSheet,  TextInput, View} from 'react-native';
import CarouselComponent from '../Components/CarouselComponent';

const ExplorerScreen = ({route, navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        placeholder="Search.."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <CarouselComponent explorer={true}/>
    </View>
  );
};

export default ExplorerScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#e5e7eb',
    width: 380,
    padding: 8,
    borderRadius: 8,
  },
  explorerContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
