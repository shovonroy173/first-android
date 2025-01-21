/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { Button, StyleSheet, Text, View } from "react-native";
const DetailsScreen = ({  navigation }) => {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Details Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  };

export default DetailsScreen;
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
