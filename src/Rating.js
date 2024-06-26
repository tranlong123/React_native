// Rating.js
import React, { useState } from 'react';
import { Heading, Row, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native';

export default function Rating(props) {
    const [rating, setRating] = useState(props.rating);

    return (
        <Row>
            <Heading>Rating: {rating} </Heading>
            {/* Hiển thị rating với các icon tương ứng */}
            {rating >= 1 ? (
                <TouchableWithoutFeedback onPress={() => setRating(1)}>
                    <Icon as={FontAwesome} name="star" size="md" color="black" margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => setRating(1)}>
                    <Icon as={FontAwesome} name="star-o" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            )}
            {rating >= 2 ? (
                <TouchableWithoutFeedback onPress={() => setRating(2)}>

                    <Icon as={FontAwesome} name="star" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => setRating(2)}>

                    <Icon as={FontAwesome} name="star-o" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            )}
            {rating >= 3 ? (
                <TouchableWithoutFeedback onPress={() => setRating(3)}>

                    <Icon as={FontAwesome} name="star" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => setRating(3)}>

                    <Icon as={FontAwesome} name="star-o" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            )}
            {rating >= 4 ? (
                <TouchableWithoutFeedback onPress={() => setRating(4)}>

                    <Icon as={FontAwesome} name="star" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => setRating(4)}>

                    <Icon as={FontAwesome} name="star-o" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            )}
            {rating >= 5 ? (
                <TouchableWithoutFeedback onPress={() => setRating(5)}>

                    <Icon as={FontAwesome} name="star" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => setRating(5)}>

                    <Icon as={FontAwesome} name="star-o" size="md" color="black"  margin={1} marginTop={1}/>
                </TouchableWithoutFeedback>
            )}
        </Row>
    );
}
