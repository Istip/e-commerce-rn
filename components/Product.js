import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const Product = ({ name, price, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price} RON</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dddddd',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 18,
  },
  thumb: {
    width: '100%',
    height: 280,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  infoContainer: {
    padding: 25,
  },
  name: {
    fontSize: 25,
    fontWeight: 'normal',
  },
  price: {
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 10,
  },
});

export default Product;
