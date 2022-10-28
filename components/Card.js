import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../data/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const cardWidth = Dimensions.get('screen').width;
const Card = ({foods}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Details', {foods})}>
      <View style={{alignItems: 'center', top: -40}}>
        <Image style={styles.image} source={foods.image} />
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
          {foods.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.grey,
            textAlign: 'center',
            marginTop: 5,
          }}>
          {foods.ingredients}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View style={styles.priceContainer}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>${foods.price}</Text>
        </View>
        <View style={styles.addToCartContainer}>
          <Icon name="add" size={24} color={COLORS.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const styles = StyleSheet.create({
  card: {
    height: 230,
    width: cardWidth / 2 - 20,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 15,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    backgroundColor: COLORS.white,
  },
  image: {
    height: 120,
    width: 120,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
export default Card;
