import React, {FC, memo, useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppDispatch, useAppSelector} from '../../store/store';
import {selectorLoading, selectorPost} from '../../store/postSlice';
import {RootStackParamListModel} from '../../utils/types';
import PostDetails from '../../components/PostDetails/PostDetails';
import {fetchPost} from '../../store/postAsync';

import {styles} from './styles';

interface Props {
  route?: RouteProp<RootStackParamListModel, 'PostDetail'>;
}

const PostDetailScreen: FC<Props> = ({route}) => {
  const postId = route?.params?.postId;
  const postData = useAppSelector(selectorPost);
  const isLoading = useAppSelector(selectorLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    postId && dispatch(fetchPost(postId));
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return <PostDetails postData={postData ?? null} />;
};

export default memo(PostDetailScreen);
