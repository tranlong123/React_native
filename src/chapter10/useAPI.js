import { useState, useEffect } from 'react'
import axios from 'axios'

const useAPI = endpoint => {
    const [data, setData] = useState([]) // initial state empty array

    //To call data when component is mounted, 
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(endpoint);
            console.log('API Response:', response.data); 
            setData(response.data);
        } catch (error) {
            console.error('API Error:', error);
            // Handle error state or display an error message to the user
        }
    }


    return data;
}

export default useAPI;
