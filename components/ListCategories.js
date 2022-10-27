import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import categories from '../data/categories';
import COLORS from '../data/colors';
const ListCategories = ({selectedIndex}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity activeOpacity={0.5} key={index}>
          <View
            style={[
              styles.categoryBtn,
              {
                backgroundColor:
                  selectedIndex === index ? COLORS.primary : COLORS.secondary,
              },
            ]}></View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoriesContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  //   categoryContainer: {
  //     alignItems: 'center',
  //     marginRight: 30,
  //   },
  //   categoryImageContainer: {
  //     width: 80,
  //     height: 80,
  //     borderRadius: 40,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //     categoryImage: {
  //     width: 60,
  //     height: 60,

  //     }
});
export default ListCategories;
