import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const DeleteScreen = () => {
  const [postId, setPostId] = useState('');

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        console.log('Delete successful');
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <View>
      <Text>Delete Screen</Text>
      <TextInput
        placeholder="Post ID"
        value={postId}
        onChangeText={text => setPostId(text)}
      />
      <Button title="Delete Data" onPress={handleDelete} />
    </View>
  );
};

export default DeleteScreen;
