import React, { FC, memo } from 'react';
import { Button, ListItem } from 'react-native-elements';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { PostModel } from '../utils/types';
import { useAppDispatch } from '../store/store';
import { deletePost } from '../store/postAsync';

interface Props {
  post: PostModel;
  onPress: (id: number) => void;
}

const PostItem: FC<Props> = ({ post, onPress }) => {
  const dispatch = useAppDispatch();
  const onRemove = (id: number) => {
    dispatch(deletePost(id));
  };

  if (!post) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ListItem onPress={() => onPress(post?.id ?? 0)}>
      <ListItem.Content>
        <ListItem.Title>{post?.title}</ListItem.Title>
      </ListItem.Content>
      <Button title="Delete" onPress={() => onRemove(post?.id ?? 0)} />
    </ListItem>
  );
};

export default memo(PostItem);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
