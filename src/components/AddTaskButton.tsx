import React from "react";
import { Button } from "react-native-elements";

type Props = {
  onPress: () => void;
};

const AddTaskButton = ({ onPress }: Props) => {
  return <Button title="Add Task" onPress={onPress} />;
};

export default AddTaskButton;
