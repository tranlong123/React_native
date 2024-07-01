import React, { useState, useContext } from 'react';
import { Text, Button, Box, Input } from 'native-base';
import axios from 'axios';
import { TodosContext } from '../../App';

export default function ToDoDetail({ route, navigation }) {
    const { id, text } = route.params;
    const [todoText, setTodoText] = useState(text);
    const { dispatch } = useContext(TodosContext);
    const endpoint = "http://10.10.180.135:3000/todos/";

    const handleEditTodo = async () => {
        try {
            await axios.patch(endpoint + id, { text: todoText });
            dispatch({ type: 'edit', payload: { id, text: todoText } });
            navigation.navigate('ToDoList');
        } catch (error) {
            console.error('Error editing todo:', error);
            // Handle error if needed
        }
    };

    return (
        <Box>
            <Input
                placeholder="Edit Todo"
                onChangeText={text => setTodoText(text)}
                value={todoText}
            />
            <Button onPress={handleEditTodo}>
                <Text>Edit</Text>
            </Button>
        </Box>
    );
}
