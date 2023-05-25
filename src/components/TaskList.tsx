import React, { FC, memo } from "react";
import { ScrollView } from "react-native";

import TaskItem from "./TaskItem";

import { TaskModel } from "../utils/types";

interface Props {
  tasks: TaskModel[];
  onRemove: (id: string) => void;
  onPress: (task: TaskModel) => void;
}

const TaskList: FC<Props> = ({ tasks, onRemove, onPress }) => (
  <ScrollView>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onRemove={onRemove}
        onPress={onPress}
      />
    ))}
  </ScrollView>
);

export default memo(TaskList);
