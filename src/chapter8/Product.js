import React, { useContext } from 'react';
import { Text } from 'native-base';
import { UserContext } from '../../App';

const Product = () => {
  const value = useContext(UserContext);

  return (
    <Text>Received, {value}</Text>
  );
};

export default Product;
