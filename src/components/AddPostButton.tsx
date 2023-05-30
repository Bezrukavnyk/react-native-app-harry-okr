import React, { memo, FC } from 'react';
import { Button } from 'react-native-elements';

type Props = {
  onPress: () => void;
};

const AddPostButton: FC<Props> = ({ onPress }) => {
  return <Button title="Add Post" onPress={onPress} />;
};

export default memo(AddPostButton);
