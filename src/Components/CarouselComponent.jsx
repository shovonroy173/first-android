import React, { useRef } from 'react';
import { View,  StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { carouselData } from '../assets/data';
import { Pagination, renderCarouselItem } from './CarouselItem';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const ITEM_HEIGHT = 200;


const CarouselComponent = () => {
  const carouselRef = useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderCarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        activeSlideAlignment="center"
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        onSnapToItem={(index) => {
          console.log('Current index:', index);
        }}
      />
      <Pagination />
    </View>
  );
};



export default CarouselComponent;

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
