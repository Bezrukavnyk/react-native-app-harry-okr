import React, { FC, memo } from "react";
import { Button, ListItem } from "react-native-elements";

import { TaskModel } from "../utils/types";

interface Props {
  task: TaskModel;
  onRemove: (id: string) => void;
  onPress: (task: TaskModel) => void;
}

const TaskItem: FC<Props> = ({ task, onRemove, onPress }) => {
  return (
    <ListItem onPress={() => onPress(task)}>
      <ListItem.Content>
        <ListItem.Title>{task.content}</ListItem.Title>
      </ListItem.Content>
      <Button title="Delete" onPress={() => onRemove(task.id)} />
    </ListItem>
  );
};

export default memo(TaskItem);
