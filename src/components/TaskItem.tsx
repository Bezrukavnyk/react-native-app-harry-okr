import React, { FC, memo } from "react";
import { Button, ListItem } from "react-native-elements";

import { PostModel } from "../utils/types";
import { useAppDispatch } from "../store/store";
import { deletePost } from "../store/taskAsync";

interface Props {
  post: PostModel;
  onPress: (id: number) => void;
}

const TaskItem: FC<Props> = ({ post, onPress }) => {
  const dispatch = useAppDispatch();
  const onRemove = (id: number) => {
    dispatch(deletePost(id));
  };
	
  return (
    <ListItem onPress={() => onPress(post.id)}>
      <ListItem.Content>
        <ListItem.Title>{post?.title}</ListItem.Title>
      </ListItem.Content>
      <Button title="Delete" onPress={() => onRemove(post.id)} />
    </ListItem>
  );
};

export default memo(TaskItem);
