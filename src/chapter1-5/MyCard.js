import React from 'react';
import { Box, Divider, Text } from 'native-base';
export default function MyCard(props) {
    return (
        <Box
            flex={1} bg="white" shadow={1}
            justifyContent="center" alignItems="center"
            paddingLeft={5} paddingRight={5}
        >
            <Text>
                {/*  Your text here */}
                {props.children}
            </Text>
            <Divider />
        </Box>
    );
}
