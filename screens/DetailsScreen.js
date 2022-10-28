import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLORS from '../data/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SecondaryButton} from '../components/Button';
const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {foods} = route.params;
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={28}
          color={COLORS.primary}
          onPress={() => navigation.goBack()}
        />
        <Icon name="shopping-cart" size={28} color={COLORS.primary} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={foods.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.white}}>
            {foods.name}
          </Text>
          <View style={styles.iconContainer}>
            <Icon name="favorite" size={28} color={COLORS.primary} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 20,
          }}>
          <View style={styles.priceContainer}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
              ${foods.price}
            </Text>
          </View>
          <View style={styles.addToCartContainer}>
            <Icon name="add" size={24} color={COLORS.white} />
          </View>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 18, color: COLORS.white}}>
            {foods.ingredients}
          </Text>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 18, color: COLORS.white}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quibusdam facere excepturi sit? Praesentium ullam repellendus
            aliquam, repudiandae recusandae commodi, id dolores obcaecati dolor
            distinctio eos doloribus officia modi ad.
          </Text>
        </View>
        <View style={{marginTop: 40, marginBottom: 20, paddingHorizontal: 20}}>
          <SecondaryButton
            title="Add to Cart"
            onPress={() => navigation.navigate('Cart')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    height: 300,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: -50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DetailsScreen;
