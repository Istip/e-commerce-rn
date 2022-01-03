import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from './CartContent';

const CartIcon = ({ navigation }) => {
  const { getItemsCount } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('Cart')}>
        Cart {getItemsCount() === 0 ? '' : `(${getItemsCount()})`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#515b8c',
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 38 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ccc',
    fontWeight: 'normal',
  },
});

export default CartIcon;
