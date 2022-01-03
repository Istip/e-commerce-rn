import { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartContext } from './CartContent';

const Cart = ({ navigation }) => {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(getTotalPrice());
  }, []);

  const Totals = () => {
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>{total} RON</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>{item.totalPrice} RON</Text>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.itemList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
};

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },

  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#ccc',
    borderTopWidth: 2,
  },

  lineTotal: {
    fontWeight: 'bold',
  },

  lineLeft: {
    fontSize: 18,
    lineHeight: 25,
    color: '#111',
  },

  lineRight: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 35,
    color: '#111',
    textAlign: 'right',
  },

  itemList: {
    backgroundColor: '#ddd',
  },

  itemsListContainer: {
    backgroundColor: '#ddd',
    padding: 10,
  },
});

export default Cart;
