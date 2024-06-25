import React from 'react';
import { Heading } from 'native-base';


export default function Rating(props) {
    return (
        <Heading>Rating: {props.rating}</Heading>
    );
}
