import React, { FC, memo } from "react";
import { ScrollView } from "react-native";
import TaskItem from "./TaskItem";
import { Task } from "../utils/types";

interface Props {
  tasks: Task[];
  onRemove: (id: string) => void;
  onPress: (task: Task) => void;
}

const TaskList: FC<Props> = memo(({ tasks, onRemove, onPress }) => (
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
));

export default TaskList;
