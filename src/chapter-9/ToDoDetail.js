import React, { useState, useContext } from 'react';
import { Text, Button, Box } from 'native-base';
import { TextInput } from 'react-native';
import { TodosContext } from '../../App';
export default function ToDoDetail({ route, navigation }) {
    const { text } = route.params;
    const [todoText, setTodoText] = useState(text)
    const { state, dispatch } = useContext(TodosContext);
    return (
        <Box>
            <Box regular>
                <TextInput
                    placeholder="Edit Todo"
                    onChangeText={text => setTodoText(text)}
                    value={todoText}
                />
            </Box >
            <Button onPress={() => {
                dispatch({
                    type: 'edit', payload: { ...route.params, text: todoText }
                });
                navigation.navigate('ToDoList');
            }}>
                <Text>Edit</Text>
            </Button>
        </Box>
    );
}
