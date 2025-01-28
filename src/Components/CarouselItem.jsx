/* eslint-disable react/react-in-jsx-scope */
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {carouselData} from '../assets/data';
import {useRef} from 'react';
import { useNavigation } from '@react-navigation/native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const ITEM_HEIGHT = 200;
const STORIES_WIDTH = 80;
const STORIES_HEIGHT = 80;
export const renderCarouselItem = ({item, index}) => {
  // console.log('LINE AT 11', item);
  return (
    <View style={styles.carouselItem}>
      <View style={styles.textContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

export const renderCarouselItemStories = ({item, index}) => {
  console.log('LINE AT 11', item.image);
  return (
    <View style={styles.carouselItemStories}>
      <Image source={item.image} style={styles.carouselItemStoriesImages} />
      <Text style={styles.itemTitleStories}>{item.title}</Text>
    </View>
  );
};

export const renderhomeScrollData = ({item, index}) => {
  console.log('LINE AT 11', item.image);
  return (
    <View style={styles.carouselContainer}>
      <View style={styles.carouselHeader}>
        <Image source={item.image} style={styles.carouselProfileImage} />
        <Text style={styles.carouselProfileTitle}>{item.title}</Text>
      </View>
      <View style={styles.carouselItemHome}>
      <Image source={item.image} style={styles.carouselPost} />
       </View>
    </View>
  );
};

export const renderExplorerData = ({item, index}) => {
  console.log('LINE AT 11', item.image);
  return (
    <TouchableOpacity style={styles.explorerDataContainer}>
      <Image source={item.image} style={styles.explorerDataContainer}/>
    </TouchableOpacity>
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
            index === carouselRef.current?.currentIndex &&
              styles.paginationDotActive,
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
    marginRight: 20,
  },
  carouselContainer: {
    height: 450,
    marginBottom: 20,
  },
  carouselItemHome: {
    width: SLIDER_WIDTH,
    height: 400,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  carouselItemStoriesImages: {
    width: STORIES_WIDTH,
    height: STORIES_HEIGHT,
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: 20,
  },
  explorerDataContainer: {
    width: 123,
    height: 123,
    resizeMode: 'contain',
    marginRight:5,
  },
  carouselPost: {
    width: 500,
    height: 700,
    resizeMode: 'contain',
  },
  carouselHeader: {
    display: 'flex',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  carouselProfileTitle: {
    fontSize: 14,
    fontWeight: 800,
  },
  itemTitleStories: {
    textAlign: 'center',
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
