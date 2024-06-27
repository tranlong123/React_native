import React, { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios
import {
    Box, Spinner, FlatList, Text, Button, Image, Icon, Input
} from 'native-base';
import { Linking } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"

const GitHubApp = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
        setData(res.data.items);
        setIsLoading(false);
    }
    const handleSearch = () => {
        setIsLoading(true);
        getData();
    }


    const renderItem = ({ item }) => (
        <Box
            style={{
                flexDirection: 'row', alignItems: 'center', padding: 10,
                borderBottomWidth: 1, borderBottomColor: '#ccc',
                justifyContent: 'space-between'
            }}
        >
            <Box style={{
                flexDirection: 'row', alignItems: 'center', paddingRight: 10,
            }}>
                <Image
                    source={{ uri: item.avatar_url }}
                    style={{ width: 50, height: 50, marginRight: 10 }}
                />
                <Box style={{ marginRight: 10 }}>
                    <Text bold> Login: {item.login}</Text>
                    <Text color="gray.400" numberOfLines={1}>Id: {item.id}</Text>
                </Box>
            </Box>

            <Button
                transparent
                colorScheme="white"
                onPress={() => { Linking.openURL(item.html_url) }}
            >
                <Text color="blue.500" fontSize={15}>View</Text>
            </Button>
        </Box>
    );

    return (
        <Box>
            <Box
                height={16}
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                bg="#e5e5e5"
            >
                <Box
                    flexDirection="row"
                    flex={1}
                    alignItems="center"
                    borderRadius={50}
                    bg="#d4d4d4"
                    marginLeft={15}
                >
                    <Icon as={FontAwesome} name='search' marginLeft={4} size={18} />
                    <Input
                        flex={1}
                        borderWidth={0}
                        fontSize={18}
                        placeholder='Search'
                        onChangeText={text => setSearchTerm(text)}
                    />
                </Box>
                <Button
                    onPress={handleSearch} 
                    variant="ghost"
                >
                    <Text bold color="blue.600" fontSize='lg'>Search</Text>
                </Button>

            </Box>
            {isLoading && <Spinner />}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </Box>
    );
}
export default GitHubApp;
