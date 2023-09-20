import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const PostScreen = () => {
  const [postData, setPostData] = useState({ title: '', body: '' });

  const handlePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(response => {
        console.log('Post successful:', response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <View>
      <Text>Post Screen</Text>
      <TextInput
        placeholder="Title"
        value={postData.title}
        onChangeText={text => setPostData({ ...postData, title: text })}
      />
      <TextInput
        placeholder="Body"
        value={postData.body}
        onChangeText={text => setPostData({ ...postData, body: text })}
      />
      <Button title="Post Data" onPress={handlePost} />
    </View>
  );
};

export default PostScreen;
