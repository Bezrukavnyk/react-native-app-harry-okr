import React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  onPress: () => void;
};

const RemoveTaskButton = ({ onPress }: Props) => {
  return (
    <Button
      icon={<Icon name="remove" size={15} color="white" />}
      onPress={onPress}
    />
  );
};

export default RemoveTaskButton;
