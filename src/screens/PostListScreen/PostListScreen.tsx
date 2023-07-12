import React, {FC, memo, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppDispatch, useAppSelector} from '../../store/store';
import {RootStackParamListModel} from '../../utils/types';
import {fetchPosts} from '../../store/postAsync';
import {selectorLoading, selectorPosts} from '../../store/postSlice';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import PostList from '../../components/PostList/PostList';
import {styles} from './styles';

const PostListScreen: FC = () => {
  const posts = useAppSelector(selectorPosts);
  const isLoading = useAppSelector(selectorLoading);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamListModel, 'ToDoList'>
    >();

  const handlePress = (postId: number) => {
    navigation.navigate('PostDetail', {postId: postId});
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
    <SafeAreaView style={styles.container}>
      <AddPostForm />
      <PostList posts={posts ?? null} onPress={handlePress} />
    </SafeAreaView>
  );
};

export default memo(PostListScreen);
