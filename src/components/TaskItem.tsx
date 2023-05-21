import React, { FC, memo } from "react";
import { Button, ListItem } from "react-native-elements";
import { Task } from "../utils/types";

interface Props {
  task: Task;
  onRemove: (id: string) => void;
  onPress: (task: Task) => void;
}

const TaskItem: FC<Props> = memo(({ task, onRemove, onPress }) => {
  return (
    <ListItem onPress={() => onPress(task)}>
      <ListItem.Content>
        <ListItem.Title>{task.content}</ListItem.Title>
      </ListItem.Content>
      <Button title="Delete" onPress={() => onRemove(task.id)} />
    </ListItem>
  );
});

export default TaskItem;
