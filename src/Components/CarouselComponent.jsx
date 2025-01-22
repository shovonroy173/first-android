import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import { renderCarouselItem, renderCarouselItemStories, renderhomeScrollData } from './CarouselItem';
import { FlatList } from 'react-native-gesture-handler';
import { carouselDataStories, homeScrollData } from '../assets/data';

// const { width: screenWidth } = Dimensions.get('window');

const CarouselComponent = ({stories, videos , home}) => {
  // const carouselRef = React.useRef(null);
  const carouselData = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ];



  return (
    <FlatList
    horizontal={(stories || videos ) ? true : false}
    data={stories ? carouselDataStories : videos ? carouselData : homeScrollData}
    renderItem={stories ? renderCarouselItemStories : videos ? renderCarouselItem : renderhomeScrollData}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    vertical={home && true}
  />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     height: 200,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

export default CarouselComponent;
