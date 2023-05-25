import React, { FC, memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useAppDispatch, useAppSelector } from "../store/store";
import { RootStackParamListModel, TaskModel } from "../utils/types";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { addTask, removeTask, selectorTasks } from "../store/taskSlice";

const TaskListScreen: FC = () => {
  const tasks = useAppSelector(selectorTasks);
  const dispatch = useAppDispatch();

  const handleAdd = (content: string) => {
    const newTask: TaskModel = { id: Date.now().toString(), content };
    dispatch(addTask(newTask));
  };

  const handleRemove = (id: string) => {
    dispatch(removeTask(id));
  };

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListModel, "ToDoList">>();

  const handlePress = (task: TaskModel) => {
    navigation.navigate("TaskDetail", { taskId: task.id });
  };

  return (
    <>
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onRemove={handleRemove} onPress={handlePress} />
    </>
  );
};

export default memo(TaskListScreen);
