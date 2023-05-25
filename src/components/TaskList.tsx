import React, { FC, memo } from "react";
import { ScrollView } from "react-native";

import TaskItem from "./TaskItem";

import { PostModel } from "../utils/types";

interface Props {
  posts: PostModel[] | null;
  onPress: (id: number) => void;
}

const TaskList: FC<Props> = ({ posts, onPress }) => (
  <ScrollView>
    {posts?.map((post) => (
      <TaskItem
        key={post.id}
        post={post}
        onPress={onPress}
      />
    ))}
  </ScrollView>
);

export default memo(TaskList);
