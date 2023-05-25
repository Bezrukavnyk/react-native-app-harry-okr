import React, { FC, memo, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { useAppDispatch, useAppSelector } from "../store/store";
import { RootStackParamListModel, TaskModel } from "../utils/types";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import {
  addTask,
  selectorLoading,
  selectorPosts,
} from "../store/taskSlice";
import { fetchPosts } from "../store/taskAsync";

const TaskListScreen: FC = () => {
  const posts = useAppSelector(selectorPosts);
  const isLoading = useAppSelector(selectorLoading);
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListModel, "ToDoList">>();

  const handlePress = (postId: number) => {
    navigation.navigate("TaskDetail", { postId: postId });
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <>
      <AddTaskForm />
      <TaskList
        posts={posts ?? null}
        onPress={handlePress}
      />
    </>
  );
};

export default memo(TaskListScreen);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
