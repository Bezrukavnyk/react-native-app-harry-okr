import React, { FC, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList, Task } from "../utils/types";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { RootState } from "../store/store";
import { addTask, removeTask } from "../store/taskSlice";

const TaskListScreen: FC = memo(() => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAdd = (content: string) => {
    const newTask: Task = { id: Date.now().toString(), content };
    dispatch(addTask(newTask));
  };

  const handleRemove = (id: string) => {
    dispatch(removeTask(id));
  };

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "ToDoList">>();

  const handlePress = (task: Task) => {
    navigation.navigate("TaskDetail", { taskId: task.id });
  };

  return (
    <>
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onRemove={handleRemove} onPress={handlePress} />
    </>
  );
});

export default TaskListScreen;
