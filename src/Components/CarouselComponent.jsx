import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import { renderCarouselItem, renderCarouselItemStories, renderExplorerData, renderhomeScrollData } from './CarouselItem';
import { FlatList } from 'react-native-gesture-handler';
import { carouselDataStories, explorerScrollData, homeScrollData } from '../assets/data';
import { StyleSheet } from 'react-native';

// const { width: screenWidth } = Dimensions.get('window');

const CarouselComponent = ({stories, videos , home, explorer}) => {
 const carouselData = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ];
  const numColumns = explorer ? 3 : 1;
  return (
    <FlatList
    horizontal={(stories || videos ) ? true : false}
    data={stories ? carouselDataStories : videos ? carouselData : explorer ? explorerScrollData : homeScrollData}
    renderItem={stories ? renderCarouselItemStories : videos ? renderCarouselItem : explorer ? renderExplorerData :  renderhomeScrollData}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    numColumns={numColumns}
    contentContainerStyle={explorer && styles.explorerContainer}
  />
  );
};

const styles = StyleSheet.create({
  explorerContainer: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
});

export default CarouselComponent;
