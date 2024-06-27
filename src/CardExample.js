import React, { Component } from 'react';
import { Box } from 'native-base';
import MyCard from './MyCard';
export default class CardExample extends Component {
    render() {
        return (
            <Box flex={1}>
                <MyCard>
                    This is a long sentence, and I want to insert content into the
                    Card component from the outside.
                </MyCard>
            </Box>
        );
    }
}
