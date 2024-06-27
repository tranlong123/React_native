import React from 'react';
import { Image } from 'react-native';
import { VStack, Box, Divider, Text, Heading, HStack } from 'native-base';

import Rating from './Rating';
export default function ProductCard(props) {
    return (
        <Box borderWidth="1" borderRadius="md" overflow="hidden">
            <VStack space={4} p={4}>
                <HStack justifyContent="space-between">
                    <Box>
                        <Heading size="md">{props.data.productName}</Heading>
                        <Text>{props.data.releasedDate}</Text>
                    </Box>
                    <Rating rating={props.data.rating} />
                </HStack>
                <Divider />
                <Box>
                    <Image source={{ uri: props.data.imageUrl }} style={{ height: 100, width: 100 }} />
                    <Text mt={2}>
                        {props.data.description}
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}
