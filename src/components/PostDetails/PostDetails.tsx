import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {PostModel} from '../../utils/types';

import {styles} from './styles';

interface Props {
  postData: PostModel | null;
}

const PostDetails: FC<Props> = ({postData}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{postData?.title}</Text>
    <Text style={styles.body}>{postData?.body}</Text>
  </View>
);

export default PostDetails;
