import React, { FC, memo } from "react";
import { RouteProp } from "@react-navigation/native";

import { useAppSelector } from "../store/store";
import { selectorTasks } from "../store/taskSlice";
import { RootStackParamListModel } from "../utils/types";
import TaskDetails from "../components/TaskDetails";

interface Props {
  route?: RouteProp<RootStackParamListModel, "TaskDetail">;
}

const TaskDetailScreen: FC<Props> = ({ route }) => {
  const taskId = route?.params?.taskId;
  const tasks = useAppSelector(selectorTasks);
  const task = tasks.find((task) => task.id === taskId);

  return <TaskDetails task={task} />;
};

export default memo(TaskDetailScreen);
