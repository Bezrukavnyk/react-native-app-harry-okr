import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { Task } from "../utils/types";

interface Props {
  task?: Task;
}

const TaskDetails: FC<Props> = memo(({ task }) => (
  <View>
    <Text>{task?.content}</Text>
  </View>
));

export default TaskDetails;
