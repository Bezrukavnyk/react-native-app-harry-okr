import React, { FC, memo } from 'react';
import { ScrollView } from 'react-native';

import PostItem from './PostItem';

import { PostModel } from '../utils/types';

interface Props {
  posts: PostModel[] | null;
  onPress: (id: number) => void;
}

const PostList: FC<Props> = ({ posts, onPress }) => (
  <ScrollView>
    {posts?.map(post => (
      <PostItem key={post.id} post={post} onPress={onPress} />
    ))}
  </ScrollView>
);

export default memo(PostList);
