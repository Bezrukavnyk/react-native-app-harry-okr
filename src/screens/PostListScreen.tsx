import React, { FC, memo, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { useAppDispatch, useAppSelector } from '../store/store';
import { RootStackParamListModel } from '../utils/types';
import AddPostForm from '../components/AddPostForm';
import PostList from '../components/PostList';
import { selectorLoading, selectorPosts } from '../store/postSlice';
import { fetchPosts } from '../store/postAsync';

const PostListScreen: FC = () => {
  const posts = useAppSelector(selectorPosts);
  const isLoading = useAppSelector(selectorLoading);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListModel, 'ToDoList'>>();

  const handlePress = (postId: number) => {
    navigation.navigate('PostDetail', { postId: postId });
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <>
      <AddPostForm />
      <PostList posts={posts ?? null} onPress={handlePress} />
    </>
  );
};

export default memo(PostListScreen);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
