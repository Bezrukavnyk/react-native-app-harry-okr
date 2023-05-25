import React, { memo, FC } from "react";
import { Button } from "react-native-elements";

type Props = {
  onPress: () => void;
};

const AddTaskButton: FC<Props> = ({ onPress }) => {
  return <Button title="Add Task" onPress={onPress} />;
};

export default memo(AddTaskButton);
