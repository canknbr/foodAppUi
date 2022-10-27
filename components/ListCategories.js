import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import categories from '../data/categories';
import COLORS from '../data/colors';
const ListCategories = () => {
  const [selectedIndex, setSelectedCategoryIndex] = useState(0);

  const handleButtonPress = index => {
    setSelectedCategoryIndex(index);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          activeOpacity={0.5}
          key={index}
          onPress={() => handleButtonPress(index)}>
          <View
            style={[
              styles.categoryBtn,
              {
                backgroundColor:
                  selectedIndex === index ? COLORS.primary : COLORS.secondary,
              },
            ]}>
            <View style={styles.categoryBtnImgIcon}>
              <Image source={category.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
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
  categoryBtnImgIcon: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    height: 35,
    width: 35,
    resizeMode: 'cover',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 10,
    textTransform: 'capitalize',
  },
});
export default ListCategories;
