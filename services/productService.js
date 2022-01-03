const PRODUCTS = [
  {
    id: 100,
    name: 'iPhone 11',
    price: 3200,
    image: require('../assets/prod1.jpg'),
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum sequi dicta eveniet nesciunt repellat autem maxime dignissimos impedit quibusdam! Quae cupiditate illo labore aliquid, rem nulla molestias id magni.',
  },
  {
    id: 101,
    name: 'Poco X3 NFC',
    price: 1100,
    image: require('../assets/prod2.jpg'),
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum sequi dicta eveniet nesciunt repellat autem maxime dignissimos impedit quibusdam! Quae cupiditate illo labore aliquid, rem nulla molestias id magni.',
  },
  {
    id: 102,
    name: 'Samsung Galaxy S21+',
    price: 2900,
    image: require('../assets/prod3.jpg'),
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nostrum velit asperiores eum deleniti, perspiciatis ea quidem ipsa ex eius vel dolores? Doloribus nisi magni vitae. Voluptatum mollitia maxime molestiae.',
  },
];

export const getProducts = () => {
  return PRODUCTS;
};

export const getProduct = (id) => {
  return PRODUCTS.find((product) => product.id === id);
};
