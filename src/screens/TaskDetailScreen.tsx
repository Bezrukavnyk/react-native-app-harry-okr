import React, { FC, memo, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { useAppDispatch, useAppSelector } from "../store/store";
import { selectorLoading, selectorPost } from "../store/taskSlice";
import { RootStackParamListModel } from "../utils/types";
import TaskDetails from "../components/TaskDetails";
import { fetchPost } from "../store/taskAsync";

interface Props {
  route?: RouteProp<RootStackParamListModel, "TaskDetail">;
}

const TaskDetailScreen: FC<Props> = ({ route }) => {
  const postId = route?.params?.postId;
  const postData = useAppSelector(selectorPost);
  const isLoading = useAppSelector(selectorLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    postId && dispatch(fetchPost(postId));
  }, []);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <TaskDetails postData={postData ?? null} />;
};

export default memo(TaskDetailScreen);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
