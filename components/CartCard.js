import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CartCard = ({foods}) => {
  return (
    <View style={styles.cartCard}>
      <Image style={styles.image} source={foods.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{foods.name}</Text>
        <Text style={styles.price}>${foods.price}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="remove-circle" size={28} color="#FF6347" />
        <Text style={styles.quantity}>2</Text>
        <Icon name="add-circle" size={28} color="#FF6347" />
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 15,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
export default CartCard;
