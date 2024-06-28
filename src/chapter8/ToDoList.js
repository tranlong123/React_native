import React, { useContext, useState } from 'react'
import { TodosContext } from '../../App';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Text, Box, Button } from 'native-base';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import uuid from 'uuid-random';

export default function ToDoList() {
    // receive state and dispatch from App.js
    const { state, dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [editTodo, setEditTodo] = useState(null)
    const buttonTitle = editMode ? "Edit" : "Add";
    //
    const deleteRow = (todo) => {
        dispatch({ type: 'delete', payload: todo });
    };
    const editRow = (todo, rowMap) => {
        setTodoText(todo.text)
        setEditMode(true)
        setEditTodo(todo)
        if (rowMap[todo.id]) {
            rowMap[todo.id].closeRow();
        }
    };

    // renderItem SwipeListView
    const renderItem = data => (
        <View style={styles.rowFront}>
            <Text>{data.item.text}</Text>
        </View>
    );
    // renderHiddenItem SwipeListView
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                onPress={() => editRow(data.item, rowMap)}
            >
                <Text>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.backRightBtn]}
                onPress={() => deleteRow(data.item)}
            >
                <Text style={{ color: '#FFF' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    const handleSubmit = () => {
        if (editMode) {
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } })
            setEditMode(false)
            setEditTodo(null)
        }
        else {
            const newToDo = { id: uuid(), text: todoText };
            dispatch({ type: 'add', payload: newToDo })
        }
        setTodoText('') // to clear field after adding
    }

    return (
        <Box>
            <Box style={styles.header}
                height={16} justifyContent="center"
                alignItems="center" flexDirection="row" bg="#f5f5f0"
                borderBottomWidth='1' borderBottomColor='gray.200'

            >
                <Box
                    style={{
                        flexDirection: 'row', alignItems: 'center',
                        flex: 1, backgroundColor: 'gray', marginLeft: 5
                    }}>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 1,
                            paddingLeft: 10,
                        }}
                        placeholder="Enter Todo"
                        onChangeText={text => setTodoText(text)}
                        value={todoText}
                    />
                </Box>
                <Button
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text color='blue.500'>{buttonTitle}</Text>
                </Button>
            </Box>
            <SwipeListView
                data={state.todos}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-75}
            />
        </Box>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        width: 66
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderBottomWidth: 0.26,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'red',
        right: 0
    }
});