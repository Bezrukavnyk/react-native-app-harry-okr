import React, { FC, memo, useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch } from '../store/store';
import { createPost } from '../store/postAsync';

const AddPostForm: FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (title && body) {
      dispatch(createPost({ title, body }));
      setTitle('');
      setBody('');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        containerStyle={styles.input}
      />
      <Input
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        containerStyle={styles.input}
      />
      <Button
        title="Add Post"
        onPress={handleSubmit}
        containerStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default memo(AddPostForm);
