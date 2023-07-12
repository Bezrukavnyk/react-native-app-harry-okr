import React, {FC, memo} from 'react';

import PostItem from '../PostItem/PostItem';

import {PostModel} from '../../utils/types';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  posts: PostModel[] | null;
  onPress: (id: number) => void;
}

const PostList: FC<Props> = ({posts, onPress}) => (
  <FlatList
    data={posts}
    renderItem={({item}) => (
      <PostItem key={item.id} post={item} onPress={onPress} />
    )}
    keyExtractor={item => item.title}
  />
);
export default memo(PostList);
