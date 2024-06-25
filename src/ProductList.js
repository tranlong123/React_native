import React from 'react';
import { FlatList } from 'react-native';
import { Box, Text} from 'native-base';

export default function ProductList() {
    const products = ["Learning React", "Pro React", "Beginning React"];
    const renderItem = ({ item }) => (
        <Box borderBottomWidth="1" borderColor="coolGray.200" py="4" px="6">
            <Text fontSize="lg">{item}</Text>
        </Box>
    );
    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />

    );
}