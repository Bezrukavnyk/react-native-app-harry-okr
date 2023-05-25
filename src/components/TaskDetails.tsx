import React, { FC, memo } from "react";
import { Text, View, StyleSheet } from "react-native";

import { PostModel } from "../utils/types";

interface Props {
  postData: PostModel | null;
}

const TaskDetails: FC<Props> = ({ postData }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{postData?.title}</Text>
    <Text style={styles.body}>{postData?.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
  },
});

export default memo(TaskDetails);
