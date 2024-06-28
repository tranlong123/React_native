import React, { useState } from 'react';
import {
   Box
} from 'native-base';
import Product from './Product';

export default function ProductList() {
    return (
        <Box
            bg="#d4d4d4"
            height={16}
            justifyContent="center"
            alignItems="center"
            shadow={3}
        >
            <Product/>
        </Box>
    )
}