import { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import { getProduct } from '../services/productService';
import { CartContext } from './CartContent';

const ProductDetails = ({ route }) => {
  const [product, setProduct] = useState({});

  const { productId } = route.params;
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  }, []);

  const onAddToCart = () => {
    addItemToCart(product.id);
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={product.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>RON {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Button onPress={onAddToCart} title="Add to cart" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dddddd',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: '#111',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 18,
  },

  image: {
    width: '100%',
    height: 320,
  },

  infoContainer: {
    padding: 25,
  },

  name: {
    fontSize: 21,
    fontWeight: 'normal',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#333',
    marginBottom: 18,
  },
});

export default ProductDetails;
