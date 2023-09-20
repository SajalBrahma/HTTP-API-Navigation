import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const GetScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <Text>Get Screen</Text>
      {data && (
        <View>
          <Text>Title: {data.title}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      )}
    </View>
  );
};

export default GetScreen;
