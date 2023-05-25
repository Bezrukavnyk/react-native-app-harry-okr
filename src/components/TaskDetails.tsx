import React, { FC, memo } from "react";
import { Text, View } from "react-native";

import { TaskModel } from "../utils/types";

interface Props {
  task?: TaskModel;
}

const TaskDetails: FC<Props> = ({ task }) => (
  <View>
    <Text>{task?.content}</Text>
  </View>
);

export default memo(TaskDetails);
