import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { getProducts } from '../services/productService';
import Product from './Product';

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const renderProduct = ({ item: product }) => {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
      />
    );
  };

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <FlatList
      style={styles.productList}
      contentContainerStyle={styles.productListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
};

const styles = StyleSheet.create({
  productList: {
    backgroundColor: '#d9d9d9',
  },
  productListContainer: {
    backgroundColor: '#d9d9d9',
    padding: 8,
  },
});

export default ProductList;
