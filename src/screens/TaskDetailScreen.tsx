import React, { FC, memo } from "react";
import { useSelector } from "react-redux";
import { RouteProp } from "@react-navigation/native";

import TaskDetails from "../components/TaskDetails";
import { RootState } from "../store/store";
import { RootStackParamList } from "../utils/types";

interface Props {
  route?: RouteProp<RootStackParamList, "TaskDetail">;
}

const TaskDetailScreen: FC<Props> = memo(({ route }) => {
  const taskId = route?.params?.taskId;

  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );

  return <TaskDetails task={task} />;
});

export default TaskDetailScreen;
