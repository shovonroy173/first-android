/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { Dimensions,  StyleSheet, Text, View } from "react-native";
import { carouselData } from "../assets/data";
import { useRef } from "react";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const ITEM_HEIGHT = 200;
export const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <View style={styles.textContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

export const Pagination = () => {
    const carouselRef = useRef(null);
    return (
      <View style={styles.paginationContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === carouselRef.current?.currentIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
    },
    carouselItem: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '70%',
      resizeMode: 'cover',
    },
    textContent: {
      padding: 10,
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    itemDescription: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#ccc',
      marginHorizontal: 4,
    },
    paginationDotActive: {
      backgroundColor: '#333',
      width: 12,
      height: 12,
      borderRadius: 6,
    },
  });
