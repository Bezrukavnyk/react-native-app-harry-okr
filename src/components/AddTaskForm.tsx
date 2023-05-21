import React, { FC, memo, useState } from "react";
import { Button, Input } from "react-native-elements";

interface Props {
  onAdd: (content: string) => void;
}

const AddTaskForm: FC<Props> = memo(({ onAdd }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onAdd(content);
    setContent("");
  };

  return (
    <>
      <Input
        placeholder="Task content"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Add task" onPress={handleSubmit} />
    </>
  );
});

export default AddTaskForm;
