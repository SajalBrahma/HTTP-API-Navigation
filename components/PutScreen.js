import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const PutScreen = () => {
  const [putData, setPutData] = useState({ id: 1, title: '', body: '' });

  const handlePut = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${putData.id}`, putData)
      .then(response => {
        console.log('Put successful:', response.data);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <View>
      <Text>Put Screen</Text>
      <TextInput
        placeholder="ID"
        value={putData.id.toString()}
        onChangeText={text => setPutData({ ...putData, id: parseInt(text) })}
      />
      <TextInput
        placeholder="Title"
        value={putData.title}
        onChangeText={text => setPutData({ ...putData, title: text })}
      />
      <TextInput
        placeholder="Body"
        value={putData.body}
        onChangeText={text => setPutData({ ...putData, body: text })}
      />
      <Button title="Update Data" onPress={handlePut} />
    </View>
  );
};

export default PutScreen;
